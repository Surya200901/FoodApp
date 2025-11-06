import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('adminToken', data.token);
        setMsg('Login successful! Redirecting...');
        setTimeout(() => navigate('/admin'), 800);
      } else {
        setMsg(data.message || 'Login failed');
      }
    } catch (e) {
      setMsg('Network error');
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} required />
          <input style={styles.input} type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange} required />
          <button style={styles.button} type="submit">Login</button>
        </form>
        <div style={{textAlign:'center', marginTop:8}}>
          <button onClick={() => navigate('/admin/register')} style={styles.linkBtn}>First time? Create admin</button>
        </div>
        <div style={styles.message}>{msg}</div>
      </div>
    </div>
  );
}

const styles = {
  bg: { minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff7f5' },
  card: { background:'#fff', padding:'2em', borderRadius:12, boxShadow:'0 6px 28px rgba(0,0,0,.06)', width:320 },
  title: { margin:0, marginBottom:'1em', color:'#E23744', textAlign:'center' },
  form: { display:'flex', flexDirection:'column', gap:12 },
  input: { padding:'0.8em', borderRadius:8, border:'1px solid #ddd', outline:'none' },
  button: { padding:'0.8em', borderRadius:8, border:'none', background:'#E23744', color:'#fff', fontWeight:'bold', cursor:'pointer' },
  message: { marginTop:10, minHeight:20, color:'#E23744', textAlign:'center' },
  linkBtn: { background:'transparent', border:'none', color:'#E23744', cursor:'pointer', textDecoration:'underline', fontWeight:'bold' }
};

export default AdminLogin;
