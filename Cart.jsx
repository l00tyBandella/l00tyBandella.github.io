import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Cart(){
  const { cart, updateQty, removeItem, clearCart, totalCount, totalPrice } = useCart();
  const nav = useNavigate();

  function placeOrder(){
    const orders = (() => { try{ return JSON.parse(localStorage.getItem('orders')||'[]'); }catch(e){ return []; } })();
    const id = 'order_' + Date.now();
    orders.push({ id, items: cart, total: totalPrice, createdAt: new Date().toISOString() });
    localStorage.setItem('orders', JSON.stringify(orders));
    clearCart();
    nav('/order-success');
  }

  return (
    <div className="container" style={{ padding: '1rem' }}>
      <h2>Cart ({totalCount})</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          <div className="list-group mb-3">
            {cart.map((it, i) => (
              <div key={i} className="list-group-item d-flex align-items-center">
                <img src={it.image} alt={it.title} style={{ width: 64, height: 64, objectFit: 'cover', marginRight: '1rem' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{it.title}</div>
                  <div style={{ color: '#ad1457' }}>{it.price}</div>
                </div>
                <div className="d-flex align-items-center">
                  <input type="number" value={it.qty} min={0} onChange={e => updateQty(it.title, Number(e.target.value))} style={{ width: 72 }} className="form-control form-control-sm me-2" />
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(it.title)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Total:</strong> <span style={{ color: '#ad1457', fontWeight: 700 }}>${totalPrice.toFixed(2)}</span>
            </div>
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={() => { clearCart(); }}>Clear</button>
              <button className="btn btn-pink" onClick={placeOrder}>Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
