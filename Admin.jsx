import React, { useEffect, useState } from 'react';
import products from './productsData';

function download(filename, text){
  const blob = new Blob([text], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
}

export default function Admin(){
  const [orderList, setOrderList] = useState([]);
  const [providerMap, setProviderMap] = useState(() => {
    try{ return JSON.parse(localStorage.getItem('providerMap') || '{}'); }catch(e){ return {}; }
  });

  useEffect(()=>{
    try{ const o = JSON.parse(localStorage.getItem('orders') || '[]'); setOrderList(o); }catch(e){ setOrderList([]); }
  }, []);

  function saveOrders(next){ localStorage.setItem('orders', JSON.stringify(next)); setOrderList(next); }

  function markShipped(id){
    const next = orderList.map(o => o.id === id ? { ...o, shipped: true, shippedAt: new Date().toISOString() } : o);
    saveOrders(next);
  }

  function exportOrders(){
    if(!orderList.length) return alert('No orders');
    const headers = ['id','createdAt','total','shipped','shippedAt','items'];
    const rows = orderList.map(o => headers.map(h => JSON.stringify(o[h]||'')).join(','));
    download('orders.csv', [headers.join(','), ...rows].join('\n'));
  }

  function exportProducts(){
    const headers = ['title','price','category','providerUrl'];
    const rows = products.map(p => headers.map(h => JSON.stringify(p[h] || providerMap[p.title] || '')).join(','));
    download('products.csv', [headers.join(','), ...rows].join('\n'));
  }

  async function fetchProvidersFromBackend(url = '/api/providers'){
    try{
      const res = await fetch(url);
      if(!res.ok) throw new Error(res.statusText||'fetch failed');
      const json = await res.json();
      // expected { "Product Title": "https://..." }
      localStorage.setItem('providerMap', JSON.stringify(json));
      setProviderMap(json);
      alert('Fetched provider map (' + Object.keys(json).length + ' entries)');
    }catch(e){ alert('Failed to fetch providers: ' + e.message); }
  }

  return (
    <div className="container">
      <h2 style={{ color: 'var(--primary)' }}>Admin — Orders & Products</h2>

      <section className="mb-4">
        <h4>Orders</h4>
        <div className="mb-2">
          <button className="btn btn-sm btn-outline-secondary me-2" onClick={exportOrders}>Export CSV</button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => { if(confirm('Clear all orders?')){ saveOrders([]); } }}>Clear Orders</button>
        </div>
        {orderList.length === 0 ? <p>No orders recorded (orders are stored in localStorage).</p> : (
          <div className="list-group">
            {orderList.map(o => (
              <div key={o.id} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <div style={{ fontWeight: 700 }}>{o.id}</div>
                    <div style={{ color: '#666' }}>{o.createdAt}</div>
                    <div>Total: ${Number(o.total||0).toFixed(2)}</div>
                    <div>Items: {o.items?.map(i => `${i.qty}×${i.title}`).join(', ')}</div>
                  </div>
                  <div className="text-end">
                    <div>{o.shipped ? 'Shipped' : 'Pending'}</div>
                    {!o.shipped && <button className="btn btn-sm btn-success mt-2" onClick={() => markShipped(o.id)}>Mark Shipped</button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h4>Products</h4>
        <div className="mb-2">
          <button className="btn btn-sm btn-outline-secondary me-2" onClick={exportProducts}>Export Products CSV</button>
          <button className="btn btn-sm btn-outline-primary" onClick={() => fetchProvidersFromBackend()}>Fetch provider map from /api/providers</button>
        </div>
        <div className="row g-3">
          {products.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card p-2">
                <div style={{ display: 'flex', gap: 12 }}>
                  <img src={p.image} alt={p.title} style={{ width: 80, height: 80, objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700 }}>{p.title}</div>
                    <div style={{ color: '#ad1457' }}>{p.price}</div>
                    <div style={{ fontSize: 12, color: '#666' }}>{p.category}</div>
                    <div style={{ marginTop: 6 }}><small>Provider URL: {providerMap[p.title] || p.providerUrl || '—'}</small></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
