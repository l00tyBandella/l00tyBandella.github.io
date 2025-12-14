import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Products({ products = [] }){
  const { addItem } = useCart();
  const nav = useNavigate();

  return (
    <div className="container">
      <h2 style={{ color: 'var(--primary)' }}>Products</h2>
      <div className="d-flex flex-wrap gap-3">
        {products.map((p, i) => (
          <div key={i} className="card p-2" style={{ width: 220 }}>
            <div style={{ height: 140, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={p.image} alt={p.imageAlt || p.title} style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="p-2">
              <h5 style={{ fontSize: '1rem' }}>{p.title}</h5>
              <div style={{ color: '#ad1457', fontWeight: 700 }}>{p.price}</div>
              <div className="mt-2 d-flex gap-2">
                <button className="btn btn-sm btn-pink" onClick={() => addItem(p, 1)}>Add</button>
                <button className="btn btn-sm btn-success" onClick={() => { addItem(p, 1); nav('/checkout'); }}>Buy Now</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => { nav('/products'); }}>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
