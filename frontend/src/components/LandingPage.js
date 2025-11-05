import React from 'react';
import { Link } from 'react-router-dom';

const foods = [
  { name: 'Pizza', img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&w=800' },
  { name: 'Biryani', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800' },
  { name: 'Burger', img: 'https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&w=800' },
  { name: 'Pasta', img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=800' },
  { name: 'Cakes', img: 'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&w=800' },
  { name: 'Drinks', img: 'https://images.pexels.com/photos/553267/pexels-photo-553267.jpeg?auto=compress&w=800' },
  { name: 'Desserts', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800' }
];

function LandingPage() {
  return (
    <div>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to FoodieApp</h1>
          <p style={styles.heroSubtitle}>
            Delicious food, lightning-fast delivery, and the best dining experience—right to your doorstep.
          </p>
          <div style={{ marginTop: '2em' }}>
            <Link to="/login" style={styles.ctaButton}>Login</Link>
            <Link to="/register" style={{ ...styles.ctaButton, background: '#F36F36', marginLeft: 10 }}>Register</Link>
          </div>
        </div>
      </section>

      <nav style={styles.infoBar}>
        <a href="#services" style={styles.infoLink}>Our Services</a>
        <a href="#menu" style={styles.infoLink}>Food Items</a>
        <a href="#address" style={styles.infoLink}>Our Address</a>
        <a href="#order" style={styles.infoLink}>Order Now</a>
      </nav>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <ul style={styles.sectionList}>
          <li>☕ 24/7 Food Delivery</li>
          <li>👩‍🍳 Chef-crafted Menus</li>
          <li>🧾 Online & COD Payment</li>
          <li>📞 Order Support</li>
          <li>🚚 Safe, Contactless Delivery</li>
        </ul>
      </section>

      <section id="menu" style={styles.foodSection}>
        <h2 style={styles.foodTitle}>Popular Food Items</h2>
        <div style={styles.foodGrid}>
          {foods.map(food => (
            <div key={food.name} style={styles.foodCard}>
              <img src={food.img} alt={food.name} style={styles.foodImg} />
              <div style={styles.foodName}>{food.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="address" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Address</h2>
        <p style={{ fontSize: '1.09em' }}>
          123 Foodie Street, Food City, FL 54321
          <br />
          Phone: (555) 123-4567
        </p>
      </section>

      <section id="order" style={styles.section}>
        <h2 style={styles.sectionTitle}>Order Now</h2>
        <p style={{ fontSize: '1.09em' }}>
          We accept online, phone, and walk-in orders. Place your order now and enjoy juicy offers!
        </p>
      </section>
    </div>
  );
}

const styles = {
  heroSection: {
    backgroundImage: 'url(https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&w=1500)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '6em 2em',
    color: '#fff',
    textAlign: 'center',
    minHeight: '400px',
    position: 'relative',
  },
  heroContent: {
    background: 'rgba(60,0,0,.28)',
    maxWidth: 600,
    margin: '0 auto',
    borderRadius: '24px',
    padding: '2em',
    boxShadow: '0 10px 30px rgba(0,0,0,.08)'
  },
  heroTitle: {
    fontSize: '2.7em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
  },
  heroSubtitle: {
    fontSize: '1.3em',
    fontWeight: 400,
  },
  ctaButton: {
    padding: '1em 2.4em',
    borderRadius: '10px',
    background: '#E23744',
    color: '#fff',
    fontSize: '1.05em',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 14px 1px #e25058a1'
  },
  infoBar: {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff6f5',
    padding: '1em 0 1em',
    gap: '2.5em',
    borderBottom: '1px solid #ffe2e1',
    marginBottom: '2em'
  },
  infoLink: {
    color: '#E23744',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1.13em',
  },
  section: {
    background: '#fff',
    padding: '2.4em 0 2.3em',
    textAlign: 'center',
    marginBottom: '1.5em',
  },
  sectionList: {
    listStyle: 'none',
    fontSize: '1.08em',
    padding: 0,
    margin: 0,
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '2.1',
    color: '#e23744'
  },
  sectionTitle: {
    color: '#e13744',
    fontWeight: 'bold',
    marginBottom: '.9em',
    fontSize: '2em'
  },
  foodSection: {
    padding: '3em 0 4em',
    background: '#fff6f5',
    textAlign: 'center',
  },
  foodTitle: {
    fontSize: '2em',
    color: '#E23744',
    marginBottom: '1.5em',
    fontWeight: 'bold',
  },
  foodGrid: {
    display: 'flex',
    gap: '2em',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '0.8em'
  },
  foodCard: {
    width: 180,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 32px rgba(225,37,68,0.13)',
    background: '#fff',
    textAlign: 'center',
    marginBottom: '1em',
    transition: 'transform .16s cubic-bezier(.45,4,0,.61)',
  },
  foodImg: {
    width: '100%',
    height: 120,
    objectFit: 'cover',
    display: 'block',
  },
  foodName: {
    padding: '0.7em 0',
    color: '#E23744',
    fontWeight: 'bold',
    fontSize: '1.13em',
    letterSpacing: '1px'
  },
};

export default LandingPage;
