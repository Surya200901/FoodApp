import React from 'react';
import bannerImg from '../assets/images/dine.jpg';


const foodCategories = [
  { label: 'Pizza', img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&w=600' },
  { label: 'Burgers', img: 'https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&w=600' },
  { label: 'Biryani', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600' },
  { label: 'Cakes', img: 'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&w=600' },
  { label: 'Drinks', img: 'https://images.pexels.com/photos/553267/pexels-photo-553267.jpeg?auto=compress&w=600' },
  { label: 'Desserts', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600' },
];

const stats = [
  { label: 'Orders This Week', value: 5, icon: '🛵', color: 'linear-gradient(135deg, #f7b42c 10%, #fc575e 100%)' },
  { label: 'Total Spent', value: '₹820', icon: '💳', color: 'linear-gradient(135deg, #43cea2 10%, #185a9d 100%)'},
  { label: 'Favorite Items', value: 3, icon: '⭐', color: 'linear-gradient(135deg, #fc6076 10%, #ff9a44 100%)'}
];

const actions = [
  { label: 'Order Food', icon: '🍽️', style: { background: 'linear-gradient(105deg, #f24645, #e23744)' } },
  { label: 'Track Orders', icon: '🚚', style: { background: 'linear-gradient(115deg, #56ab2f, #a8e063)' } },
  { label: 'Explore Deals', icon: '🔥', style: { background: 'linear-gradient(125deg, #614385, #516395)' } },
];

function Dashboard() {
  return (
    <div style={styles.outerBg}>
      <div style={styles.bannerSection}>
        <div style={styles.bannerContent}>
          <h1 style={styles.bigTitle}>Hey, Foodie! 👋</h1>
          <div style={styles.bigSub}>Welcome back! Ready to treat yourself?</div>
        </div>
      </div>
      <div style={styles.statsRow}>
        {stats.map(stat => (
          <div key={stat.label} style={{...styles.statCard, background: stat.color}}>
            <span style={styles.statIcon}>{stat.icon}</span>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={styles.sectionTitle}>Discover Categories</div>
      <div style={styles.foodGrid}>
        {foodCategories.map(cat => (
          <div key={cat.label} style={styles.foodCard}>
            <img src={cat.img} alt={cat.label} style={styles.foodImg} />
            <div style={styles.foodLabel}>{cat.label}</div>
          </div>
        ))}
      </div>
      <div style={styles.sectionTitle}>Quick Actions</div>
      <div style={styles.actionsRow}>
        {actions.map(action => (
          <button key={action.label} style={{...styles.actionBtn, ...action.style}}>
            <span style={{fontSize:'2em', display:'block', marginBottom:2}}>{action.icon}</span>
            <span style={{fontWeight:'bold',fontSize:'1em'}}>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  outerBg: {
    minHeight: '100vh',
    background: 'linear-gradient(110deg, #fff9e6 0%, #ffe4ee 100%)',
    padding: 0,
  },
  bannerSection: {
    background: `url(${bannerImg}) center/cover`,
    minHeight: 210,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    boxShadow: '0 6px 46px 0 #f2373c12',
    position: 'relative',
    marginBottom: 24,
  },
  bannerContent: {
    background: 'rgba(233,56,71,0.81)',
    borderRadius: 20,
    padding: '2.7em 2em',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 6px 30px 0 #e2374480',
  },
  bigTitle: {
    fontSize: '2.4em',
    fontWeight: '700',
    letterSpacing: '2px',
    margin: 0,
  },
  bigSub: {
    fontSize: '1.21em',
    fontWeight: '400',
    letterSpacing: '1px',
    marginTop: 7,
  },
  statsRow: {
    display: 'flex',
    gap: 20,
    marginTop: -38,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 850,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 42,
  },
  statCard: {
    minWidth: 170,
    minHeight: 110,
    padding: '18px 24px',
    borderRadius: 16,
    color: '#fff',
    boxShadow: '0 3px 16px 0 #e2374455',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  statIcon: {
    fontSize: '2.3em',
    marginBottom: 5,
    filter: 'drop-shadow(0px 0px 5px #fff8)'
  },
  statValue: { fontSize:'1.6em', },
  statLabel: {
    fontSize: '1em',
    fontWeight: 500,
    letterSpacing: 0.2,
    marginTop: 4,
    textShadow: '0 1px 2px #d5506048'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '1.46em',
    color: '#e23744',
    fontWeight: 'bold',
    margin: '1.6em 0 0.7em 0',
    letterSpacing: '0.5px',
  },
  foodGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    justifyContent: 'center',
    marginBottom: '2.5em',
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  foodCard: {
    position: 'relative',
    borderRadius: '18px',
    boxShadow: '0 3px 19px #e237441b',
    overflow: 'hidden',
    minWidth:140,
    maxWidth: 165,
    background: '#fff',
    transition: 'transform .14s cubic-bezier(.47,1.64,.41,.8)',
  },
  foodImg: {
    width: '100%',
    height: 104,
    objectFit: 'cover',
    display: 'block',
  },
  foodLabel: {
    fontWeight: 'bold',
    color: '#e23744',
    textAlign:'center',
    margin: '0.9em 0 1em 0',
    fontSize: '1.06em',
  },
  actionsRow: {
    display:'flex',
    gap:'2em',
    justifyContent:'center',
    flexWrap:'wrap',
    paddingBottom:'2.4em',
    marginTop:8
  },
  actionBtn: {
    minWidth:170,
    border: 'none',
    borderRadius: '16px',
    boxShadow:'0 3px 13px #e2374424',
    color:'#fff',
    padding: '1.6em 2em',
    margin:'0 0 1em',
    fontSize: '1.18em',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'inherit',
    transition:'transform .13s cubic-bezier(.45,1.62,.31,.72), box-shadow .15s',
  }
};

export default Dashboard;
