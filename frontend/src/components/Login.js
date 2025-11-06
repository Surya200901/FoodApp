import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// SVG Eye/Open icon
const EyeOpen = (props) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#7B26DA"/>
  </svg>
);

// SVG Eye/Closed icon
const EyeClosed = (props) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M2 12s4.5-7 10-7 10 7 10 7-4.5 7-10 7-10-7-10-7zm1 0a9.98 9.98 0 0018 0 9.98 9.98 0 00-18 0zm9 3c1.65 0 3-1.35 3-3a3 3 0 00-3-3c-1.65 0-3 1.35-3 3a3 3 0 003 3zm6.19-5.19l-12.38 12.38 1.41 1.41L21.59 6.59l-1.41-1.41z" fill="#BDBDBD"/>
  </svg>
);

function Login() {
  const [form, setForm] = useState({ email: '', phone: '', password: '' });
  const [msg, setMsg] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if ((!form.email && !form.phone) || !form.password) {
      setMsg('Please enter email/phone and password.');
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
      setTimeout(() => navigate('/home'), 900);
    } else {
      setMsg(data.message || data.error);
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.gradientAnim} />
      <div style={styles.card}>
        <button onClick={() => navigate('/')} style={styles.backNavBtn} title="Back to Main">←</button>
        <img
          src={require('../assets/images/dine.jpg')}
          alt="Premium Login"
          style={styles.image}
        />
        <h2 style={styles.title}>Welcome back!</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{fontWeight:'bold',color:'#7B26DA',fontSize:'0.87em',marginBottom:3,marginTop:-10}}>or</div>
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
            style={styles.input}
          />
          <div style={styles.passwordRow}>
            <input
              type={showPass ? 'text' : 'password'}
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
              required
              style={{...styles.input, paddingRight: '2.5em'}}
            />
            <span onClick={() => setShowPass(s => !s)} style={styles.eyeIcon} aria-label="Toggle password visibility" tabIndex={0}>
              {showPass ? <EyeOpen /> : <EyeClosed />}
            </span>
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <div style={styles.message}>{msg}</div>
        <p style={styles.text}>Don't have an account? <Link to="/register" style={styles.link}>Register</Link></p>
      </div>
      {/* CSS keyframes should be declared in global css or via CSS-in-JS library */}
      <style>
        {`@keyframes rotateBg { 0% { transform: rotate(0deg);} 100% {transform:rotate(360deg);} }
          @keyframes fadeInCard { from { opacity:0; transform:scale(.98);} to {opacity:1; transform:scale(1);} }`}
      </style>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  gradientAnim: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    left: 0,
    top: 0,
    background: 'conic-gradient(at 30% 38%, #8C45FF, #84E1F6 24%, #FFE57F 44%, #FFCFDE 67%, #7B26DA 99%)',
    animation: 'rotateBg 16s linear infinite',
    opacity: '.48',
    filter: 'blur(46px)',
  },
  card: {
    background: 'rgba(255,255,255,0.97)',
    borderRadius: '24px',
    boxShadow: '0 8px 48px #7B26DA0D, 0 4px 32px #E2374412',
    padding: '2.7em 2.2em',
    textAlign: 'center',
    maxWidth: 350,
    width: '100%',
    position: 'relative',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
    border: '1px solid #EEE8F2',
    animation: 'fadeInCard 1.1s cubic-bezier(.45,1,.35,.97)'
  },
  image: {
    width: '95px',
    height: '95px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1.2em',
    boxShadow: '0 3px 22px #7B26DA33'
  },
  backNavBtn: {
    position: 'absolute',
    top: 18,
    right: 15,
    background: '#fff',
    border: '2px solid #EEE8F2',
    color: '#7B26DA',
    borderRadius: '50%',
    width: 35,
    height: 35,
    fontSize: '1.28em',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 2px 8px #7B26DA17',
    zIndex: 9,
    transition: 'background 0.14s, color .17s'
  },
  title: {
    fontSize: '1.68em',
    margin: '0 0 1.6em',
    background: 'linear-gradient(to right,#7B26DA,#E23744,#F3A183,#FFDF6E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    letterSpacing: '1.5px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    marginBottom: '1.15em',
  },
  input: {
    padding: '1em',
    borderRadius: '10px',
    border: '1.5px solid #D3B7F6',
    fontSize: '1.14em',
    outline: 'none',
    boxShadow: '0 2px 10px #F3A18312',
    fontWeight: 500,
    letterSpacing: '.5px',
    background: 'rgba(250,245,255,.87)',
    transition: 'border-color .21s'
  },
  passwordRow: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%'
  },
  eyeIcon: {
    position: 'absolute',
    right: '11px',
    top: '16px',
    cursor: 'pointer',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '24px',
    width: '27px',
    justifyContent: 'center'
  },
  button: {
    padding: '0.92em',
    borderRadius: '10px',
    background: 'linear-gradient(90deg,#8C45FF 40%, #FFCFDE 140%)',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1.15em',
    cursor: 'pointer',
    boxShadow: '0 2px 14px #7B26DA28',
    transition: 'transform .18s, box-shadow .14s'
  },
  message: {
    color: '#E23744',
    minHeight: 22,
    marginBottom: '1em',
    marginTop: '-.5em',
    fontWeight: 600
  },
  text: {
    fontSize: '1.01em'
  },
  link: {
    color: '#7B26DA',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginLeft: 4
  }
};

export default Login;
