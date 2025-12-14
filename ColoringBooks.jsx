import React, { useState } from 'react';

function JokesList({ jokes }){
  return (
    <details style={{width:'100%'}}>
      <summary style={{cursor:'pointer', color:'#7b1fa2'}}>Jokes (click to open)</summary>
      <ul style={{textAlign:'left', color:'#7b1fa2', paddingLeft: '1rem'}}>
        {jokes.map((j, idx)=> <li key={idx}>{j}</li>)}
      </ul>
    </details>
  )
}

export default function ColoringBooks({ books }) {
  const featured = books[0];
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  function openModal(book){ setSelected(book); setOpen(true); }
  function closeModal(){ setSelected(null); setOpen(false); }
  return (
    <div className="container" style={{ padding: '2.5rem 1rem' }}>
      <div className="text-center mb-3">
        <img src={'/assets/illustrations/coloring-collage.svg'} alt="coloring collage" style={{ maxWidth: 320, opacity: 1 }} />
      </div>
      <div className="rounded-4 p-4 mb-4" style={{ background: 'linear-gradient(90deg,#fff0fa 0%, #ffeefc 100%)', border: '1px solid rgba(200,150,200,0.08)' }}>
        <h1 style={{ color: 'var(--primary)', fontWeight: 800 }}>Coloring Books</h1>
        <p style={{ color: 'var(--secondary)', marginBottom: 0 }}>Full-length coloring books (20+ pages) filled with quirky jokes, whimsical characters, and sample pages you can try for free.</p>
      </div>
      {/* Featured Book Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #ffe6fa 0%, #e1bee7 100%)',
        borderRadius: 24,
        boxShadow: '0 4px 24px rgba(200, 100, 180, 0.10)',
        marginBottom: '2.5rem',
        padding: '2rem 2.5rem',
        gap: 32,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ width: 180, height: 180, background: '#f8bbd0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 2px 12px #e1bee7' }}>
          <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <h1 style={{ color: '#c2185b', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{featured.title}</h1>
          <p style={{ color: '#7b1fa2', fontSize: '1.2rem', marginBottom: '1rem', whiteSpace: 'pre-line' }}>{featured.description}</p>
          <p style={{ color: '#ad1457', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 0 }}>{featured.price}</p>
        </div>
      </div>
      {/* Modal for sample pages */}
      {open && selected && (
        <div role="dialog" aria-modal="true" aria-labelledby="modalTitle" style={{ position:'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.35)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:9999 }} onClick={closeModal}>
          <div style={{ background:'#fff', padding:24, borderRadius:12, width:'90%', maxWidth:700 }} onClick={(e)=>e.stopPropagation()}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h2 id="modalTitle" style={{ margin:0, color:'#c2185b' }}>{selected.title} — Sample Pages</h2>
              <button onClick={closeModal} style={{ border:'none', background:'transparent', fontSize:18, cursor:'pointer' }}>✕</button>
            </div>
            <p style={{ color:'#7b1fa2' }}>{selected.description}</p>
            <div className="row g-3">
                    {(selected.samplePages || []).map((p, idx) => (
                      <div key={idx} className="col-12 col-md-6 col-lg-4">
                        <div className="card card-pink p-3 h-100">
                          <h4 style={{ margin:0, color:'var(--primary)' }}>Page {idx+1}</h4>
                          <p style={{ color:'var(--secondary)', margin: '0.5rem 0 0' }}>{p}</p>
                        </div>
                      </div>
                    ))}
            </div>
            {selected.jokes && (
              <div style={{ marginTop:12 }}>
                <h4 style={{ color:'#6C63FF' }}>Jokes</h4>
                <ul style={{ color:'#7b1fa2' }}>
                  {selected.jokes.map((j, i) => <li key={i}>{j}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {/* End Featured Book */}
      <h2 style={{ color: '#c2185b', fontSize: '2rem', marginBottom: '1.2rem', textAlign: 'center' }}>All Coloring Books</h2>
      <div className="row coloring-grid">
        {books.slice(1).map((book, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 d-flex">
            <div className="card card-pink text-center w-100" style={{ cursor: 'pointer', padding: 16 }} onClick={() => openModal(book)}>
              <div style={{ width: 120, height: 120, margin: '0 auto 12px', background: '#f8bbd0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'var(--primary)' }}>{book.title} {book.mood && <span className="badge badge-pill badge-mood ms-2">{book.mood}</span>}</h5>
                <p className="card-text" style={{ color: 'var(--secondary)', minHeight: 40 }}>{book.description}</p>
                <p style={{ color: '#ad1457', fontWeight: 'bold' }}>{book.price}</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-muted">{book.pages ? `${book.pages} pages` : ''}</small>
                  {book.jokes && book.jokes.length > 0 && <small className="text-muted">{book.jokes.length} jokes</small>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
