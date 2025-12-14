import React from 'react';

export default function Testimonials(){
  const items = [
    {name: 'Lola R.', text: 'Love the playful designs and the quality feels premium for a demo site!', rating:5},
    {name: 'Maya P.', text: 'The products look fun and luxe — the site feels like a boutique.', rating:4},
    {name: 'Jess K.', text: 'Checkout was clear and images are lovely. Great job on the vibe!', rating:5}
  ];

  return (
    <section className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>What people say</h2>
        <small style={{color:'var(--secondary)'}}>Real-ish testimonials for demo</small>
      </div>
      <div className="d-flex gap-3 flex-wrap">
        {items.map((t,i)=> (
          <div className="testimonial-card" key={i} style={{minWidth:240, maxWidth:360}}>
            <div className="d-flex align-items-center mb-2">
              <div style={{width:44, height:44, borderRadius:22, background:'#f9d8ec', display:'flex', alignItems:'center', justifyContent:'center', marginRight:12}}> {t.name.split(' ')[0][0]}</div>
              <div>
                <div style={{fontWeight:700}}>{t.name}</div>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</div>
              </div>
            </div>
            <p style={{margin:0, color:'#444'}}>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
