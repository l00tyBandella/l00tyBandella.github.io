import React, { useState } from 'react';

export default function NewsletterCTA(){
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(e){
    e.preventDefault();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return alert('Please enter a valid email');
    // simulate subscription (no backend)
    setSubscribed(true);
    try{ const list = JSON.parse(localStorage.getItem('newsletter')||'[]'); list.push({email, at: new Date().toISOString()}); localStorage.setItem('newsletter', JSON.stringify(list)); }catch(e){}
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4 rounded-4 card-pink text-center">
        <h3 className="mb-2">Join our newsletter</h3>
        <p className="mb-3 text-pink">Get updates on new coloring books, limited drops and exclusive offers.</p>
        {subscribed ? (
          <div className="alert alert-success">Thanks for subscribing — check your inbox!</div>
        ) : (
          <form className="d-flex justify-content-center gap-2" onSubmit={subscribe}>
            <input className="form-control" style={{ maxWidth: 360 }} placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} aria-label="Email" />
            <button className="btn btn-dark" type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  )
}
