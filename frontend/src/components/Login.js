import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', phone: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    // Validation: Require either email or phone, plus password
    if ((!form.email && !form.phone) || !form.password) {
      setMsg('Please enter your email or phone and your password.');
      return;
    }
    setMsg('');

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      setMsg('Login successful! Redirecting...');
      setTimeout(() => navigate('/home'), 1000);
    } else {
      setMsg(data.message || data.error);
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <button onClick={() => navigate('/')} style={styles.backNavBtn} title="Back to Main">←</button>
        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=400" alt="Food Login" style={styles.image}/>
        <h2 style={styles.title}>Login to your account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email (optional)"
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{fontWeight:'bold',color:'#E23744',fontSize:'0.87em',marginBottom:3,marginTop:-10}}>or</div>
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone (optional)"
            onChange={handleChange}
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
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <div style={styles.message}>{msg}</div>
        <p style={styles.text}>Don't have an account? <Link to="/register" style={styles.link}>Register</Link></p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f8d2d3 0%, #ffe2c0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3em 1em',
    flexDirection: 'column',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 40px rgba(60,0,0,.11)',
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
    boxShadow: '0 3px 12px rgba(220,80,80,.17)'
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
    background: '#E23744',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1em',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(226,55,68,.12)'
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

export default Login;
