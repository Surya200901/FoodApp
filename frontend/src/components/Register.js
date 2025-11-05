import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ email: '', phone: '', password: '' });
  const [msg, setMsg] = useState('');
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
    <div style={styles.bg}>
      <div style={styles.card}>
        <button onClick={() => navigate('/')} style={styles.backNavBtn} title="Back to Main">←</button>
        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=400" alt="Food Register" style={styles.image} />
        <h2 style={styles.title}>Create your account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <div style={styles.message}>{msg}</div>
        <p style={styles.text}>Already have an account? <Link to="/login" style={styles.link}>Login</Link></p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f8e9f7 0%, #d5f7fa 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3em 1em',
    flexDirection: 'column',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 40px rgba(60,0,0,.09)',
    padding: '2.5em 2em',
    textAlign: 'center',
    maxWidth: 322,
    width: '100%',
    position: 'relative',
    zIndex: 1
  },
  backNavBtn: {
    position: 'absolute',
    top: 18,
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
    boxShadow: '0 3px 12px rgba(220,80,80,.13)'
  },
  title: {
    fontSize: '1.45em',
    margin: '0 0 1.45em',
    color: '#E23744',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    marginBottom: '1.1em',
  },
  input: {
    padding: '0.85em',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1em',
    outline: 'none',
  },
  button: {
    padding: '0.75em',
    borderRadius: '8px',
    background: '#F36F36',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1em',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(220,80,80,.11)'
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
