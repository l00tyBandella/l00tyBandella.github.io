import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedProductsCarousel({ items = [] }){
  // Use first 3 items as featured if not provided
  const slides = items.length ? items.slice(0,3) : [
    { title: 'Velvet Vixen Lace Set', image: '/assets/illustrations/emoji-unicorn.svg', caption: 'Sultry & playful — perfect for special nights.' },
    { title: 'Silk Slip Nightdress', image: '/assets/illustrations/hero-illustration.svg', caption: 'Soft silk for dreamy evenings.' },
    { title: 'Super Silly Selfies Book', image: '/assets/illustrations/emoji-skater.svg', caption: '24 pages of silliest faces and jokes.' }
  ];

  return (
    <div className="container mt-4">
      <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded-4 overflow-hidden shadow-sm">
          {slides.map((s, idx) => (
            <div key={idx} className={`carousel-item ${idx===0 ? 'active' : ''}`}>
              <div className="d-flex flex-column flex-md-row align-items-center gap-3 p-4" style={{ background: 'linear-gradient(90deg, rgba(255,240,250,0.6), rgba(255,255,255,0.6))' }}>
                <div style={{ width: 220, height: 180, flex: '0 0 auto' }}>
                  <img src={s.image} alt={s.title || s.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="flex-fill">
                  <h3 style={{ color: 'var(--primary)' }}>{s.title}</h3>
                  <p className="mb-2" style={{ color: 'var(--secondary)' }}>{s.caption}</p>
                  <div className="d-flex gap-2">
                    <Link to="/products" className="btn btn-pink">Shop</Link>
                    <Link to="/coloring-books" className="btn btn-outline-secondary">Preview Book</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
