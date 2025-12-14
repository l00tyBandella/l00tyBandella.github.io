const sgMail = require('@sendgrid/mail');

// Netlify function entry — requires env vars:
// SENDGRID_API_KEY, NOTIFY_TO_EMAIL, NOTIFY_FROM_EMAIL

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  try{
    const body = JSON.parse(event.body || '{}');
    const { items = [], total = 0, count = 0, redirectTo = '', timestamp = new Date().toISOString() } = body;

    const apiKey = process.env.SENDGRID_API_KEY;
    // default recipient to the repo owner's Proton address if NOTIFY_TO_EMAIL is not set
    const to = process.env.NOTIFY_TO_EMAIL || 'l00tybandella@proton.me';
    const from = process.env.NOTIFY_FROM_EMAIL;

    if(!apiKey || !from){
      console.error('Missing SendGrid config (API key or FROM address)');
      return { statusCode: 500, body: 'Email config missing' };
    }

    sgMail.setApiKey(apiKey);

    const itemsHtml = items.map(i => `<li>${i.qty}× ${i.title} — ${i.price}</li>`).join('');
    const textItems = items.map(i => `${i.qty}× ${i.title} — ${i.price}`).join('\n');

    const msg = {
      to,
      from,
      subject: `New checkout redirect — ${count} item(s) — $${Number(total).toFixed(2)}`,
      text: `A customer reached checkout and was redirected to a provider.\n\nItems:\n${textItems}\n\nTotal: $${Number(total).toFixed(2)}\nRedirected to: ${redirectTo}\nTime: ${timestamp}`,
      html: `<p>A customer reached checkout and was redirected to a provider.</p>
             <p><strong>Items:</strong></p><ul>${itemsHtml}</ul>
             <p><strong>Total:</strong> $${Number(total).toFixed(2)}</p>
             <p><strong>Redirected to:</strong> <a href="${redirectTo}">${redirectTo}</a></p>
             <p><strong>Time:</strong> ${timestamp}</p>`
    };

    await sgMail.send(msg);
    return { statusCode: 200, body: 'OK' };
  }catch(err){
    console.error('sendNotification error', err);
    return { statusCode: 500, body: 'Error' };
  }
};
