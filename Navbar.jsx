import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { totalCount } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Bandella Looty</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Our Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/checkout">Checkout</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart {totalCount ? `(${totalCount})` : ''}</Link></li>
            <li className="nav-item ms-3">
              <button className="btn btn-sm btn-outline-light" onClick={toggleTheme} aria-label="Toggle theme" aria-pressed={theme === 'dark'}>
                {theme === 'light' ? <i className="bi bi-moon" aria-hidden /> : <i className="bi bi-sun" aria-hidden />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
