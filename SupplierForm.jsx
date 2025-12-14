import React, { useEffect, useState } from 'react';

export default function SupplierForm({ supplier=null, onCancel, onSave }){
  const [form, setForm] = useState({ id: '', name:'', type:'Printing', website:'', contact:'', moq:'', status:'prospecting', notes:'' });

  useEffect(()=>{ if(supplier) setForm({...supplier}); else setForm(f=>({...f, id: 's'+Date.now()})); }, [supplier]);

  function change(k,v){ setForm(f => ({...f, [k]: v})); }

  function submit(e){ e.preventDefault(); if(!form.name) return alert('Name required'); onSave(form); }

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex:9999, background: 'rgba(0,0,0,0.35)' }}>
      <div className="card p-4" style={{ width: 640 }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="m-0">{supplier ? 'Edit Supplier' : 'Add Supplier'}</h5>
          <button className="btn-close" onClick={onCancel} />
        </div>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input className="form-control" value={form.name} onChange={e=>change('name', e.target.value)} />
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label className="form-label">Type</label>
              <select className="form-select" value={form.type} onChange={e=>change('type', e.target.value)}>
                <option>Printing</option>
                <option>Clothing</option>
                <option>Fabric</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label">Status</label>
              <select className="form-select" value={form.status} onChange={e=>change('status', e.target.value)}>
                <option value="prospecting">Prospecting</option>
                <option value="contacted">Contacted</option>
                <option value="quote_received">Quote</option>
                <option value="approved">Approved</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label className="form-label">Website</label>
              <input className="form-control" value={form.website} onChange={e=>change('website', e.target.value)} />
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label">Contact</label>
              <input className="form-control" value={form.contact} onChange={e=>change('contact', e.target.value)} />
            </div>
          </div>
          <div className="mb-2">
            <label className="form-label">MOQ</label>
            <input className="form-control" value={form.moq} onChange={e=>change('moq', e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Notes</label>
            <textarea className="form-control" value={form.notes} onChange={e=>change('notes', e.target.value)} rows={3} />
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>Cancel</button>
            <button type="submit" className="btn btn-pink">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
