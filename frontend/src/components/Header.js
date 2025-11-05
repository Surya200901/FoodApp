import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = ['Pizza', 'Biryani', 'Cakes', 'Drinks', 'Burgers', 'Pasta', 'Desserts'];

function Header({ variant }) {
  const navigate = useNavigate();
  const isDashboard = variant === 'dashboard';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <span style={styles.logo}>🍴 FoodieApp</span>
      </div>
      {isDashboard ? (
        <nav style={styles.navSection}>
          {categories.map((cat) => (
            <a key={cat} href={`#${cat.toLowerCase()}`} style={styles.navLink}>
              {cat}
            </a>
          ))}
          <Link to="/home" style={styles.navLink}>Home</Link>
        </nav>
      ) : null}
      <div style={styles.authSection}>
        {!isDashboard && (
          <>
            <button style={styles.authButton} onClick={() => navigate('/login')}>Login</button>
            <button 
              style={{...styles.authButton, background: '#f36f36'}} 
              onClick={() => navigate('/register')}
            >Signup</button>
          </>
        )}
        {isDashboard && (
          <button 
            style={{...styles.authButton, background:'#555'}} 
            onClick={handleLogout}
          >Logout</button>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: '#fff',
    borderBottom: '1px solid #efefef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.8em 2em',
    boxShadow: '0 3px 18px rgba(60,60,60,0.03)'
  },
  logoSection: {
    flex: 1,
  },
  logo: {
    fontSize: '2em',
    color: '#E23744',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  navSection: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '2em',
  },
  navLink: {
    color: '#262626',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1.05em',
    transition: 'color 0.2s',
  },
  authSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1em',
  },
  authButton: {
    padding: '0.55em 1.5em',
    background: '#E23744',
    border: 'none',
    borderRadius: '18px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1em',
    boxShadow: '0px 2px 5px rgba(0,0,0,.02)',
    cursor: 'pointer',
    textDecoration: 'none'
  }
};

export default Header;
