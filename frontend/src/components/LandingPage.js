import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const premiumBackground = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const foods = [
  { name: 'Pizza', img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&w=800' },
  { name: 'Biryani', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800' },
  { name: 'Burger', img: 'https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&w=800' },
  { name: 'Pasta', img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=800' },
  { name: 'Cakes', img: 'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&w=800' },
  { name: 'Drinks', img: 'https://images.pexels.com/photos/553267/pexels-photo-553267.jpeg?auto=compress&w=800' },
  { name: 'Desserts', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800' }
];

const premiumColors = {
  gold: '#fde5a6',
  navy: '#23395d',
  champagne: '#f7e5cf',
  silver: '#cfd8dc',
  accent: '#8bb0c7',
  primary: '#32475b',
  cardBg: 'rgba(248,245,241,0.92)',
};

function LandingPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!document.getElementById('premium-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'premium-animations';
      styleSheet.textContent = `
        [data-animate] {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 0.7s cubic-bezier(0.25, 0.14, 0.32, 1.06);
        }
        [data-animate].visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        a.cta-primary:hover {
          transform: translateY(-4px) scale(1.08) !important;
          box-shadow: 0 15px 45px rgba(253,229,166,0.4), 0 0 35px rgba(50,71,91,0.25) !important;
        }
        a.cta-secondary:hover {
          background: rgba(255, 255, 255, 1) !important;
          border-color: ${premiumColors.gold} !important;
          color: ${premiumColors.primary} !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 38px rgba(253,229,166,0.3);
        }
        .service-card {
          background: ${premiumColors.cardBg};
          border-radius: 32px;
          padding: 2.75em 2.5em;
          border: 2px solid ${premiumColors.gold};
          box-shadow: 0 12px 40px rgba(253,229,166,0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-15px) scale(1.07);
          box-shadow: 0 30px 90px rgba(253,229,166,0.45), 0 0 50px rgba(50,71,91,0.15);
          border-color: ${premiumColors.champagne};
          background: rgba(255,255,255,0.98);
        }
        .service-icon {
          font-size: 4.5em;
          color: ${premiumColors.gold};
          margin-bottom: 1em;
          filter: drop-shadow(0 2px 4px rgba(253,229,166,0.7));
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.3) rotate(10deg);
          color: ${premiumColors.champagne};
          filter: drop-shadow(0 4px 8px rgba(253,229,166,0.9));
        }
        .food-card {
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(253,229,166,0.15), rgba(50,71,91,0.08));
          border: 2px solid ${premiumColors.silver};
          box-shadow: 0 14px 50px rgba(50,71,91,0.2);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          display: flex;
          flex-direction: column;
        }
        .food-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .food-card:hover {
          transform: translateY(-20px) scale(1.1);
          box-shadow: 0 30px 80px rgba(253,229,166,0.3), 0 0 50px rgba(50,71,91,0.15);
          border-color: ${premiumColors.gold};
          background: rgba(255,255,255,1);
        }
        .food-card:hover img {
          transform: scale(1.2);
          filter: brightness(1.05);
        }
        .food-img-wrapper {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 5px 22px rgba(50,71,91,0.2);
          flex-grow: 1;
          position: relative;
        }
        .food-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 28px;
          display: block;
          z-index: 1;
        }
        .food-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(253,229,166,0.18) 100%);
          transition: opacity 0.3s ease;
          z-index: 2;
          pointer-events: none;
        }
        a.info-link {
          color: ${premiumColors.primary};
          font-weight: 700;
          position: relative;
          text-decoration: none;
          padding-bottom: 0.3em;
          transition: all 0.3s ease;
        }
        a.info-link:hover {
          color: ${premiumColors.gold};
          transform: translateY(-2px);
        }
        a.info-link:hover::after {
          content: '';
          position: absolute;
          height: 3px;
          background: linear-gradient(90deg, transparent, ${premiumColors.gold}, transparent);
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 10px;
        }
        a.order-btn {
          padding: 1.25em 3.5em;
          border-radius: 60px;
          background: linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.champagne} 100%);
          color: ${premiumColors.primary};
          font-weight: 800;
          font-size: 1.2em;
          box-shadow: 0 18px 60px rgba(253,229,166,0.4);
          border: none;
          text-decoration: none;
          display: inline-block;
          margin-top: 1em;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        a.order-btn:hover {
          transform: translateY(-7px) scale(1.1);
          box-shadow: 0 30px 90px rgba(253,229,166,0.6), 0 0 70px rgba(50,71,91,0.3);
          color: ${premiumColors.navy};
        }
      `;
      document.head.appendChild(styleSheet);
    }

    setVisible(true);

    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          const delay = el.getAttribute('data-delay') || 0;
          setTimeout(() => {
            el.classList.add('visible');
          }, delay * 1000);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // run once to reveal what's already on screen
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.page}>
      <section style={{ ...styles.heroSection, backgroundImage: `url(${premiumBackground})` }}>
        <div style={styles.heroOverlay}></div>
        <div style={{ ...styles.heroContent, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out' }}>
          <h1 style={styles.heroTitle}>Welcome to FoodieApp</h1>
          <p style={styles.heroSubtitle}>
            Delicious food, lightning-fast delivery, and the best dining experience—right to your doorstep.
          </p>
          <div style={{ marginTop: '2.5em', display: 'flex', gap: '1em', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/login" className="cta-primary" style={styles.ctaButtonPrimary}>Login</Link>
            <Link to="/register" className="cta-secondary" style={styles.ctaButtonSecondary}>Register</Link>
          </div>
        </div>
      </section>

      <nav style={styles.infoBar}>
        <a href="#services" className="info-link">Our Services</a>
        <a href="#menu" className="info-link">Food Items</a>
        <a href="#address" className="info-link">Our Address</a>
        <a href="#order" className="info-link">Order Now</a>
      </nav>

      <section id="services" style={styles.section}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle} data-animate>Our Premium Services</h2>
          <div style={styles.servicesGrid}>
            {[{ icon: '☕', title: '24/7 Delivery', desc: 'Round-the-clock service' },
              { icon: '👩‍🍳', title: 'Chef-crafted Menus', desc: 'Gourmet quality dishes' },
              { icon: '🧾', title: 'Flexible Payment', desc: 'Online & COD options' },
              { icon: '📞', title: '24/7 Support', desc: 'Always here to help' },
              { icon: '🚚', title: 'Safe Delivery', desc: 'Contactless & secure' }].map((service, idx) => (
              <div key={idx} className="service-card" style={styles.serviceCard} data-animate data-delay={idx * 0.05}>
                <div className="service-icon" style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" style={styles.foodSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.foodTitle} data-animate>Popular Food Items</h2>
          <div style={styles.foodGrid}>
            {foods.map((food, idx) => (
              <div key={food.name} className="food-card" data-animate data-delay={idx * 0.1} style={styles.foodCard}>
                <div style={styles.foodCardInner}>
                  <div className="food-img-wrapper" style={styles.foodImgWrapper}>
                    <img src={food.img} alt={food.name} style={styles.foodImg} />
                    <div className="food-overlay" style={styles.foodOverlay}></div>
                  </div>
                  <div style={styles.foodName}>{food.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="address" style={styles.section}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle} data-animate>Visit Us</h2>
          <div style={styles.addressCard} data-animate>
            <p style={styles.addressText}>
              <strong style={{ display: 'block', marginBottom: '0.5em', fontSize: '1.2em' }}>📍 Location</strong>
              123 Foodie Street, Food City, FL 54321
              <br />
              <strong style={{ display: 'block', marginTop: '0.8em' }}>📞 Phone:</strong> (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <section id="order" style={styles.section}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle} data-animate>Ready to Order?</h2>
          <p style={styles.orderText} data-animate>
            We accept online, phone, and walk-in orders. Place your order now and enjoy exclusive offers!
          </p>
          <Link to="/register" className="order-btn" data-animate style={styles.orderButton}>Get Started</Link>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: `linear-gradient(180deg, ${premiumColors.champagne} 0%, #f5f3f0 50%, #faf9f7 100%)`,
    minHeight: '100vh',
    color: premiumColors.primary,
    fontFamily: "'Lora', serif",
  },
  heroSection: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '8em 2em',
    color: '#fff',
    textAlign: 'center',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, rgba(253,229,166,0.85) 0%, rgba(50,71,91,0.4) 100%)`,
    backdropFilter: 'blur(3px)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 720,
    margin: '0 auto',
    background: 'rgba(255,255,255,0.88)',
    backdropFilter: 'blur(24px)',
    borderRadius: '32px',
    padding: '4em 3em',
    border: `2px solid ${premiumColors.gold}`,
    boxShadow: `0 24px 72px rgba(253,229,166,0.38), 0 0 40px rgba(50,71,91,0.18)`,
  },
  heroTitle: {
    fontSize: 'clamp(2.8em, 5vw, 5em)',
    fontWeight: 900,
    marginBottom: '0.4em',
    background: `linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.champagne} 40%, ${premiumColors.accent} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.03em',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.3em, 2vw, 1.5em)',
    fontWeight: 300,
    lineHeight: 1.6,
    color: premiumColors.navy,
    marginBottom: '1.8em',
    fontStyle: 'italic',
  },
  ctaButtonPrimary: {
    padding: '1.25em 3.5em',
    borderRadius: '60px',
    background: `linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.champagne} 100%)`,
    color: premiumColors.primary,
    fontWeight: 800,
    fontSize: '1.15em',
    boxShadow: `0 15px 60px rgba(253,229,166,0.35)`,
    border: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    borderBottom: `4px solid ${premiumColors.silver}`,
    transition: 'all 0.3s ease',
  },
  ctaButtonSecondary: {
    padding: '1.25em 3.5em',
    borderRadius: '60px',
    background: 'rgba(255,255,255,0.93)',
    backdropFilter: 'blur(14px)',
    color: premiumColors.accent,
    fontWeight: 700,
    fontSize: '1.15em',
    border: `3px solid ${premiumColors.gold}`,
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'all 0.3s ease',
  },
  infoBar: {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(24px)',
    padding: '1.6em 3em',
    gap: '3em',
    borderBottom: `2px solid ${premiumColors.silver}`,
    marginBottom: 0,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    flexWrap: 'wrap',
    boxShadow: '0 4px 26px rgba(50,71,91,0.12)',
  },
  section: {
    background: 'transparent',
    padding: '7em 2em',
    textAlign: 'center',
    position: 'relative',
  },
  sectionContainer: {
    maxWidth: 1240,
    margin: '0 auto',
  },
  sectionTitle: {
    color: premiumColors.primary,
    fontWeight: 900,
    marginBottom: '2.5em',
    fontSize: 'clamp(2.5em, 4vw, 3.8em)',
    background: `linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.accent} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.03em',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '3em',
    marginTop: '3em',
  },
  serviceCard: {
    background: premiumColors.cardBg,
    borderRadius: '32px',
    padding: '2.75em 2.5em',
    border: `2px solid ${premiumColors.gold}`,
    textAlign: 'center',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: `0 12px 40px rgba(253,229,166,0.3)`,
  },
  serviceIcon: {
    fontSize: '4.5em',
    marginBottom: '1em',
    color: premiumColors.gold,
    filter: 'drop-shadow(0 2px 6px rgba(253,229,166,0.7))',
    transition: 'transform 0.3s ease',
  },
  serviceTitle: {
    fontSize: '1.5em',
    fontWeight: 800,
    marginBottom: '0.6em',
    color: premiumColors.navy,
  },
  serviceDesc: {
    fontSize: '1.1em',
    color: premiumColors.accent,
    lineHeight: 1.65,
    fontWeight: 500,
  },
  foodSection: {
    padding: '7em 2em',
    background: `linear-gradient(180deg, ${premiumColors.accent}14 0%, transparent 100%)`,
    textAlign: 'center',
  },
  foodTitle: {
    fontSize: 'clamp(2.5em, 4vw, 3.8em)',
    color: premiumColors.primary,
    marginBottom: '3em',
    fontWeight: 900,
    background: `linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.accent} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.02em',
  },
  foodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '3.2em',
    maxWidth: 1150,
    margin: '0 auto',
  },
  // removed opacity/transform from foodCard here - animations are handled by the injected stylesheet
  foodCard: {
    borderRadius: '28px',
    overflow: 'hidden',
    background: `linear-gradient(135deg, rgba(253,229,166,0.15), rgba(50,71,91,0.08))`,
    border: `2px solid ${premiumColors.silver}`,
    boxShadow: `0 14px 50px rgba(50,71,91,0.2)`,
    cursor: 'pointer',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
  },
  foodCardInner: {
    position: 'relative',
  },
  // ensure wrapper is relative so overlay absolutely positions over the image
  foodImgWrapper: {
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: `0 5px 22px rgba(50,71,91,0.2)`,
    flexGrow: 1,
    position: 'relative',
  },
  foodImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '28px',
    display: 'block',
    zIndex: 1,
  },
  foodOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, transparent 0%, rgba(253,229,166,0.18) 100%)',
    transition: 'opacity 0.3s ease',
    zIndex: 2,
    pointerEvents: 'none',
  },
  foodName: {
    padding: '1.5em 1.2em',
    color: premiumColors.accent,
    fontWeight: 800,
    fontSize: '1.25em',
    letterSpacing: '0.6px',
    background: 'linear-gradient(135deg, rgba(253,229,166,0.12) 0%, rgba(168,197,214,0.06) 100%)',
  },
  // addressCard removed opacity/transform so stylesheet animation can reveal it
  addressCard: {
    background: 'rgba(255,255,255,0.98)',
    backdropFilter: 'blur(22px)',
    borderRadius: '32px',
    padding: '3.5em 3em',
    maxWidth: 650,
    margin: '3em auto 0',
    border: `2px solid ${premiumColors.silver}`,
    boxShadow: `0 16px 50px rgba(50,71,91,0.12)`,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'center',
  },
  addressText: {
    fontSize: '1.15em',
    color: premiumColors.accent,
    lineHeight: 1.9,
    fontWeight: 600,
  },
  // orderText/button removed inline opacity/transform to allow stylesheet to reveal them via .visible
  orderText: {
    fontSize: '1.3em',
    color: premiumColors.accent,
    marginBottom: '2.4em',
    lineHeight: 1.7,
  },
  orderButton: {
    padding: '1.25em 3.5em',
    borderRadius: '60px',
    background: `linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.champagne} 100%)`,
    color: premiumColors.primary,
    fontWeight: 900,
    fontSize: '1.2em',
    boxShadow: `0 18px 60px rgba(253,229,166,0.4)`,
    border: 'none',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    marginTop: '1em',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default LandingPage;
