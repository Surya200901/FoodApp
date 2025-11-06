import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Animate React entry with fade effect
const fadeInAnim = {
  animation: 'fadein .85s cubic-bezier(0.45, 0, 0.55, 1)'
};

function Register() {
  const [form, setForm] = useState({ email: '', phone: '', password: '' });
  const [msg, setMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!data.error) {
      setMsg('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1000);
    } else {
      setMsg(data.message || data.error);
    }
  };

  return (
    <div style={{ ...styles.bg, ...fadeInAnim }}>
      <div style={styles.card}>
        <button onClick={() => navigate('/')} style={styles.backNavBtn} title="Back to Main">←</button>
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=400"
          alt="Food Register"
          style={styles.image}
        />
        <h2 style={styles.title}>Create your account</h2>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            required
            style={styles.input}
            autoComplete="email"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
            required
            style={styles.input}
            autoComplete="tel"
          />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
              required
              style={{
                ...styles.input,
                paddingRight: 42
              }}
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(s => !s)}
              style={styles.eyeBtn}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Material Eye Open Icon SVG
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#e23744"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  style={styles.eyeSvg}
                >
                  <path d="M1 12C3.5 7 8 4 12 4s8.5 3 11 8c-2.5 5-7 8-11 8s-8.5-3-11-8z"/>
                  <circle cx="12" cy="12" r="3.2"/>
                </svg>
              ) : (
                // Material Eye Closed Icon SVG
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#e23744"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  style={styles.eyeSvg}
                >
                  <path d="M17.94 17.94C16.11 19.23 14.13 20 12 20 7 20 2.73 15.11 1 12c.49-.89 1.13-1.84 1.88-2.75M22.11 11.25A11.82 11.82 0 0019.66 8.2M9.53 9.53A3.01 3.01 0 0012 15c1.31 0 2.42-.84 2.83-2M4.8 4.8l14.4 14.4"/>
                  <path d="M3 3l18 18"/>
                </svg>
              )}
            </button>
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <div style={styles.message}>{msg}</div>
        <p style={styles.text}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f8e9f7 0%, #e0ffff 50%, #f9ceb9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3em 1em',
    flexDirection: 'column',
    transition: 'background 1s',
  },
  card: {
    background: '#fff',
    borderRadius: '22px',
    boxShadow: '0 12px 44px 0 rgba(55,56,113,.07), 0 4px 16px 0 rgba(220,80,80,.16)',
    padding: '2.7em 2.1em 2em 2.1em',
    textAlign: 'center',
    maxWidth: 332,
    width: '100%',
    position: 'relative',
    zIndex: 1,
    animation: 'cardPop .6s cubic-bezier(0.55,.08,.39,.93)'
  },
  backNavBtn: {
    position: 'absolute',
    top: 13,
    right: 15,
    background: '#fff',
    border: '1.5px solid #eee',
    color: '#e23744',
    borderRadius: '50%',
    width: 32,
    height: 32,
    fontSize: '1.3em',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 2px 6px #fae6ea22',
    transition: 'background 0.12s, box-shadow 0.14s',
    zIndex: 2,
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1em',
    boxShadow: '0 6px 16px rgba(210,90,80,.18)'
  },
  title: {
    fontSize: '1.53em',
    margin: '0 0 1.25em',
    color: '#E23744',
    fontWeight: 'bold',
    letterSpacing: '0.01em'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.13em',
    marginBottom: '1.3em',
  },
  input: {
    padding: '1em',
    borderRadius: '9px',
    border: '1px solid #e3d2e4',
    fontSize: '1.04em',
    outline: 'none',
    transition: 'box-shadow 0.18s, border 0.14s',
    boxShadow: '0 1px 6px #fae6ea13',
    background: '#f9f9fd'
  },
  button: {
    padding: '0.86em',
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #E23744 60%, #F36F36 100%)',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1.09em',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(220,80,80,.11)'
  },
  eyeBtn: {
    position: 'absolute',
    top: '50%',
    right: 8,
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 34,
    zIndex: 3
  },
  eyeSvg: {
    display: 'block',
    pointerEvents: 'none'
  },
  message: {
    color: '#E23744',
    minHeight: 22,
    marginBottom: '1em',
    marginTop: '-.5em',
    fontWeight: 500
  },
  text: {
    fontSize: '0.97em',
  },
  link: {
    color: '#E23744',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginLeft: 4
  }
};

export default Register;
