import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import providers from './checkoutProviders';
import { CHECKOUT_NOTIFICATION_ENDPOINT } from './serverConfig';

export default function Checkout(){
  const { cart, totalCount, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  async function postOrderThenRedirect(redirectUrl){
    setLoading(true);
    const payload = {
      items: cart,
      total: totalPrice,
      count: totalCount,
      redirectTo: redirectUrl,
      customerEmail: user?.email || 'anonymous@customer.com',
      createdAt: new Date().toISOString()
    };

    try{
      await fetch(CHECKOUT_NOTIFICATION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }catch(err){
      console.warn('Failed to send checkout notification:', err);
    }finally{
      setLoading(false);
    }

    // Redirect to provider regardless of notification result
    window.open(redirectUrl, '_blank', 'noopener');
  }

  return (
    <div className="container">
      <h2 style={{ color: 'var(--primary)' }}>Checkout</h2>
      {user && <p style={{ color: '#666', fontSize: '0.9rem' }}>Logged in as: <strong>{user.email}</strong></p>}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((i, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{i.title}</strong>
                  <div style={{ color: '#555' }}>{i.qty} × {i.price}</div>
                </div>
                <img src={i.image} alt={i.title} style={{ width: 60, height: 60, objectFit: 'cover' }} />
              </li>
            ))}
          </ul>

          <div className="mb-3">
            <div><strong>Items:</strong> {totalCount}</div>
            <div><strong>Total:</strong> ${totalPrice.toFixed(2)}</div>
          </div>

          <div className="mb-3">
            <p>Choose how you'd like to pay. You will be redirected to the provider to complete the purchase.</p>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-primary" disabled={loading} onClick={() => postOrderThenRedirect(providers.gumroad)}>Gumroad (Digital files)</button>
              <button className="btn btn-secondary" disabled={loading} onClick={() => postOrderThenRedirect(providers.payhip)}>Payhip (Digital files)</button>
              <button className="btn btn-warning" disabled={loading} onClick={() => postOrderThenRedirect(providers.paypal)}>PayPal (Physical goods / Buy Now)</button>
              <button className="btn btn-info" disabled={loading} onClick={() => postOrderThenRedirect(providers.square)}>Square (Physical goods)</button>
              <button className="btn btn-dark" disabled={loading} onClick={() => postOrderThenRedirect(providers.sellfy)}>Sellfy (Full storefront)</button>
              <button className="btn btn-outline-secondary" disabled={loading} onClick={() => postOrderThenRedirect(providers.paypalMe)}>PayPal.Me (Quick Buy)</button>
            </div>
          </div>

          <div className="mt-3">
            <button className="btn btn-outline-danger me-2" onClick={() => clearCart()}>Clear Cart</button>
            <button className="btn btn-outline-success" onClick={() => { alert('You will be redirected to your chosen provider — replace provider links in checkoutProviders.js with your real URLs.'); }}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}
