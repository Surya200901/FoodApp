import React, { useState } from 'react';

const Sections = [
  { key: 'menu', label: 'Menu' },
  { key: 'dinein', label: 'Dine-In' },
  { key: 'takeaway', label: 'Take Away' },
  { key: 'delivery', label: 'Delivery' },
  { key: 'cart', label: 'Cart' },
  { key: 'payment', label: 'Payment' },
];

function Home() {
  const [currentTab, setCurrentTab] = useState('menu');

  return (
    <div style={styles.dashboardBg}>
      <div style={styles.tabNav}>
        {Sections.map((s) => (
          <button
            key={s.key}
            style={{ ...styles.tabBtn, ...(currentTab === s.key ? styles.tabBtnActive : {}) }}
            onClick={() => setCurrentTab(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div style={styles.contentBox}>
        {currentTab === 'menu' && <div>[Menu placeholder]</div>}
        {currentTab === 'dinein' && <div>[Dine-In placeholder]</div>}
        {currentTab === 'takeaway' && <div>[Take Away placeholder]</div>}
        {currentTab === 'delivery' && <div>[Delivery placeholder]</div>}
        {currentTab === 'cart' && <div>[Cart placeholder]</div>}
        {currentTab === 'payment' && <div>[Payment placeholder]</div>}
      </div>
    </div>
  );
}

const styles = {
  dashboardBg: { background: 'linear-gradient(120deg, #ffeee7 0%, #fffadf 100%)', minHeight: '100vh', padding: '2.2em 1em 4em 1em' },
  tabNav: { display: 'flex', gap: '1.2em', background: '#fff', boxShadow: '0 2px 10px #f7e2e1', borderRadius: '10px', padding: '1em', justifyContent: 'center', marginBottom: 30 },
  tabBtn: { background: '#fff', border: '1.5px solid #e4e4e4', borderRadius: 10, padding: '0.5em 2em', fontWeight: 'bold', color: '#e23744', cursor: 'pointer', transition: 'all 0.13s' },
  tabBtnActive: { background: '#e23744', color: '#fff', borderColor: '#e23744' },
  contentBox: { minHeight: 290, padding: '2.5em', background: '#fff9', borderRadius: 16, margin: '0 auto', boxShadow: '0 5px 27px 0 #eee', maxWidth: 800 }
};

export default Home;
