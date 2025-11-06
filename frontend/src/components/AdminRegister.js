import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminRegister() {
  const [form, setForm] = useState({ name: '', email: '', password: '', setupKey: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Admin registered. Redirecting to login...');
        setTimeout(() => navigate('/admin/login'), 900);
      } else {
        setMsg(data.message || 'Registration failed');
      }
    } catch (e) {
      setMsg('Network error');
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input style={styles.input} type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input style={styles.input} type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
          <input style={styles.input} name="setupKey" value={form.setupKey} onChange={handleChange} placeholder="Setup Key (if required)" />
          <button style={styles.button} type="submit">Create Admin</button>
        </form>
        <div style={{fontSize:'0.9em', color:'#555', marginTop:6}}>Only the first admin can register without a setup key. If an admin already exists, enter the setup key configured by the system owner.</div>
        <div style={styles.message}>{msg}</div>
      </div>
    </div>
  );
}

const styles = {
  bg: { minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff7f5' },
  card: { background:'#fff', padding:'2em', borderRadius:12, boxShadow:'0 6px 28px rgba(0,0,0,.06)', width:340 },
  title: { margin:0, marginBottom:'1em', color:'#E23744', textAlign:'center' },
  form: { display:'flex', flexDirection:'column', gap:12 },
  input: { padding:'0.8em', borderRadius:8, border:'1px solid #ddd', outline:'none' },
  button: { padding:'0.8em', borderRadius:8, border:'none', background:'#E23744', color:'#fff', fontWeight:'bold', cursor:'pointer' },
  message: { marginTop:10, minHeight:20, color:'#E23744', textAlign:'center' }
};

export default AdminRegister;
