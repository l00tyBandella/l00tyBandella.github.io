import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export default function Login({ onLoginSuccess }) {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (isSignup) {
      if (signup(email, password)) {
        onLoginSuccess?.();
      } else {
        setError('Signup failed');
      }
    } else {
      if (login(email, password)) {
        onLoginSuccess?.();
      } else {
        setError('Invalid credentials');
      }
    }
  };

  const quickDemo = () => {
    setEmail('test@example.com');
    setPassword('password123');
    setTimeout(() => {
      if (login('test@example.com', 'password123')) {
        onLoginSuccess?.();
      }
    }, 100);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #c2185b 0%, #7b1fa2 100%)' }}>
      <div className="card p-5" style={{ width: '100%', maxWidth: 400 }}>
        <div className="text-center mb-4">
          <h2 style={{ color: '#c2185b', marginBottom: '0.5rem' }}>Bandella Looty</h2>
          <p className="text-muted">{isSignup ? 'Create Account' : 'Login'}</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-pink w-100 mb-3">
            {isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>

        <button className="btn btn-outline-secondary w-100 mb-3" onClick={quickDemo}>
          Quick Demo Login
        </button>

        <div className="text-center">
          <small>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              className="btn btn-link p-0"
              onClick={() => setIsSignup(!isSignup)}
              style={{ textDecoration: 'none', color: '#c2185b' }}
            >
              {isSignup ? 'Login' : 'Sign up'}
            </button>
          </small>
        </div>

        <hr />
        <small className="text-muted">
          Demo: test@example.com / password123
        </small>
      </div>
    </div>
  );
}