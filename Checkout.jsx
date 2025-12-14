import React from 'react';
import { useCart } from './CartContext';
import providers from './checkoutProviders';
import { SERVER_URL } from './serverConfig';

export default function Checkout(){
  const { cart, totalCount, totalPrice, clearCart } = useCart();

  // Post the order to your server, then redirect to the provider.
  // Server URL is configured in `serverConfig.js`.

  async function postOrderThenRedirect(redirectUrl){
    const payload = {
      items: cart,
      total: totalPrice,
      count: totalCount,
      redirectTo: redirectUrl,
      createdAt: new Date().toISOString()
    };

    try{
      await fetch(`${SERVER_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }catch(err){
      console.warn('Failed to POST order to server, continuing to redirect', err);
    }

    // Redirect to provider regardless of POST result
    window.open(redirectUrl, '_blank', 'noopener');
  }

  return (
    <div className="container">
      <h2 style={{ color: 'var(--primary)' }}>Checkout</h2>
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
              <button className="btn btn-primary" onClick={() => postOrderThenRedirect(providers.gumroad)}>Gumroad (Digital files)</button>
              <button className="btn btn-secondary" onClick={() => postOrderThenRedirect(providers.payhip)}>Payhip (Digital files)</button>
              <button className="btn btn-warning" onClick={() => postOrderThenRedirect(providers.paypal)}>PayPal (Physical goods / Buy Now)</button>
              <button className="btn btn-info" onClick={() => postOrderThenRedirect(providers.square)}>Square (Physical goods)</button>
              <button className="btn btn-dark" onClick={() => postOrderThenRedirect(providers.sellfy)}>Sellfy (Full storefront)</button>
              <button className="btn btn-outline-secondary" onClick={() => postOrderThenRedirect(providers.paypalMe)}>PayPal.Me (Quick Buy)</button>
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
