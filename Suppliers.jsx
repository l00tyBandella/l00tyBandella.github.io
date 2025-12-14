import React, { useEffect, useState } from 'react';
import SupplierForm from './SupplierForm';

const SAMPLE_SUPPLIERS = [
  { id: 'mixam', name: 'Mixam', type: 'Printing', website: 'https://mixam.com', contact: 'team@mixam.com', notes: 'Good for short-to-medium print runs and booklets', moq: 25, status: 'prospecting' },
  { id: 'printninja', name: 'PrintNinja', type: 'Printing', website: 'https://printninja.com', contact: 'support@printninja.com', notes: 'Great for offset bulk runs', moq: 200, status: 'contacted' },
  { id: 'blurb', name: 'Blurb', type: 'Printing', website: 'https://blurb.com', contact: 'support@blurb.com', notes: 'Photo book quality, good templates', moq: 5, status: 'quote_received' },
  { id: 'printful', name: 'Printful', type: 'Clothing', website: 'https://printful.com', contact: 'support@printful.com', notes: 'POD clothing & fulfillment', moq: 1, status: 'prospecting' },
  { id: 'makersvalley', name: "MakersValley", type: 'Clothing', website: 'https://makersvalley.com', contact: 'info@makersvalley.com', notes: 'Italian factories & small runs', moq: 25, status: 'prospecting' }
];

function loadSuppliers(){
  try{ const raw = localStorage.getItem('suppliers'); if(!raw) return SAMPLE_SUPPLIERS; return JSON.parse(raw); }catch(e){ return SAMPLE_SUPPLIERS; }
}

function saveSuppliers(list){ localStorage.setItem('suppliers', JSON.stringify(list)); }

export default function Suppliers(){
  const [suppliers, setSuppliers] = useState(() => loadSuppliers());
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{ saveSuppliers(suppliers); }, [suppliers]);

  function addSupplier(s){ setSuppliers(s => [s, ...s]); setShowForm(false); }
  function updateSupplier(id, data){ setSuppliers(s => s.map(x => x.id===id?{...x,...data}:x)); setShowForm(false); setEditing(null); }
  function removeSupplier(id){ if(!confirm('Delete supplier?')) return; setSuppliers(s => s.filter(x=>x.id!==id)); }

  function exportCSV(){
    const headers = ['id','name','type','website','contact','moq','status','notes'];
    const rows = suppliers.map(s => headers.map(h => JSON.stringify(s[h]||'')).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'suppliers.csv'; a.click(); URL.revokeObjectURL(url);
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 style={{ color: 'var(--primary)' }}>Suppliers</h2>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={exportCSV}>Export CSV</button>
          <button className="btn btn-pink" onClick={()=>{ setEditing(null); setShowForm(true); }}>Add Supplier</button>
        </div>
      </div>

      <div className="row g-3">
        {suppliers.map(s => (
          <div key={s.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="card-title mb-1">{s.name}</h5>
                    <div className="mb-2"><small className="text-muted">{s.type} • MOQ: {s.moq || 'n/a'}</small></div>
                  </div>
                  <div className="text-end">
                    <span className={`badge ${s.status==='approved'?'bg-success': s.status==='quote_received'?'bg-info':'bg-secondary'}`}>{s.status}</span>
                  </div>
                </div>
                <p className="card-text" style={{ color: 'var(--secondary)', flex: 1 }}>{s.notes}</p>
                <div className="d-flex gap-2 mt-3">
                  <a className="btn btn-outline-primary btn-sm" href={s.website} target="_blank" rel="noreferrer">Website</a>
                  <button className="btn btn-outline-secondary btn-sm" onClick={()=>{ setEditing(s); setShowForm(true); }}>Edit</button>
                  <button className="btn btn-danger btn-sm ms-auto" onClick={()=>removeSupplier(s.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <SupplierForm supplier={editing} onCancel={()=>{ setShowForm(false); setEditing(null); }} onSave={(data)=>{
          if(editing) updateSupplier(editing.id, data); else addSupplier({ ...data, id: data.id || ('s'+Date.now()) });
        }} />
      )}
    </div>
  );
}
