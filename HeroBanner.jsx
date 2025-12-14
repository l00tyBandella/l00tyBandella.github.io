import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroBanner(){
  return (
    <section className="hero-banner bg-gradient p-5 rounded-4 mb-4 text-center text-white position-relative overflow-hidden">
      <img src={'/assets/illustrations/hero-illustration.svg'} alt="Hero Pattern" className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover', zIndex: 1, opacity: 0.15 }} />
      <div className="container position-relative" style={{zIndex: 2}}>
        <h1 className="display-5 fw-bold" style={{ color: '#fff' }}>Bandella Looty — Kewl, Funny, & Stylish</h1>
        <p className="lead" style={{ color: '#f7d0f0' }}>A playful dropshipping + creator playground. Explore our coloring books and curated collections.</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/coloring-books" className="btn btn-lg btn-pink px-4">Coloring Books</Link>
          <Link to="/products" className="btn btn-outline-light btn-lg px-4">Shop Lingerie</Link>
        </div>
      </div>
      <div className="hero-pattern position-absolute top-0 start-0 w-100 h-100 opacity-40" style={{ zIndex:0 }}></div>
    </section>
  )
}
