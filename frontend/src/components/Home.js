import React from 'react';

const foods = [
  { name: 'Pizza', img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&w=800', desc: 'Hot classic Italian pizza' },
  { name: 'Biryani', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800', desc: 'Royal Indian rice & chicken' },
  { name: 'Burger', img: 'https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&w=800', desc: 'Cheesy American burgers' },
  { name: 'Pasta', img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=800', desc: 'Italian pasta classics' },
  { name: 'Cakes', img: 'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&w=800', desc: 'Cakes for every taste' },
  { name: 'Drinks', img: 'https://images.pexels.com/photos/553267/pexels-photo-553267.jpeg?auto=compress&w=800', desc: 'Refreshing mocktails' },
  { name: 'Desserts', img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800', desc: 'Satisfy your sweet tooth' }
];

function Home() {
  return (
    <div style={styles.dashboardBg}>
      <div style={styles.greetingBox}>
        <h1 style={styles.dashboardHeading}>Welcome Back, Foodie! 🍽️</h1>
        <p style={styles.subHeading}>Here are your favorite picks today</p>
      </div>
      <div style={styles.foodGridTitle}>Popular Food Categories</div>
      <div style={styles.foodGrid}>
        {foods.map(food => (
          <div key={food.name} style={styles.foodCard}>
            <img src={food.img} alt={food.name} style={styles.foodImg} />
            <div style={styles.foodName}>{food.name}</div>
            <div style={styles.cardDesc}>{food.desc}</div>
            <button style={styles.orderBtn}>Order Now</button>
          </div>
        ))}
      </div>
      <div style={styles.statsBar}>
        <div><b>Orders this week:</b> 10</div>
        <div><b>Favorites:</b> 4</div>
        <div><b>Today's Offer:</b> Get free delivery on any Pizza!</div>
      </div>
    </div>
  );
}

const styles = {
  dashboardBg: {
    background: 'linear-gradient(120deg, #ffeee7 0%, #fffadf 100%)',
    minHeight: '100vh',
    padding: '2.2em 1em 4em 1em',
  },
  greetingBox: {
    textAlign: 'center',
    marginBottom: '1.8em',
    marginTop: '2em',
  },
  dashboardHeading: {
    color: '#e23744',
    fontSize: '2.3em',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: '1.12em',
    color: '#993333',
    fontWeight: 500
  },
  foodGridTitle: {
    fontWeight: 'bold',
    color: '#e23744',
    fontSize: '1.5em',
    textAlign:'center',
    marginBottom: 17,
  },
  foodGrid: {
    display: 'flex',
    gap: '2.2em',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '1.7em'
  },
  foodCard: {
    width: 200,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 44px rgba(225,37,68,0.13)',
    background: '#fff',
    textAlign: 'center',
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    paddingBottom:16
  },
  foodImg: {
    width: 200,
    height: 125,
    objectFit: 'cover',
    display: 'block',
    borderRadius:'16px 16px 0 0'
  },
  foodName: {
    color: '#E23744',
    fontWeight: 'bold',
    fontSize: '1.13em',
    marginTop: 6,
  },
  cardDesc: {
    color:' #555',
    marginTop:2,
    marginBottom:8,
    fontSize: '0.95em',
    padding: '0 10px',
  },
  orderBtn: {
    background:'#e23744',
    color:'#fff',
    border:'none',
    borderRadius: '9px',
    padding:'0.55em 1.7em',
    marginTop:'5px',
    fontWeight:'bold',
    fontSize:'1em',
    cursor:'pointer'
  },
  statsBar: {
    marginTop:40,
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:'3em',
    fontSize:'1.06em',
    color:'#a84c32',
    background:'#fff8f3',
    borderRadius:'12px',
    padding:'1em',
    maxWidth:700,
    marginLeft:'auto',
    marginRight:'auto',
    boxShadow: '0 2px 24px 0 rgba(0,0,0,.06)'
  }
};

export default Home;
