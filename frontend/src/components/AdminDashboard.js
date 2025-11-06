import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TABS = [
  { key: 'items', label: 'Items' },
  { key: 'categories', label: 'Categories' },
  { key: 'store', label: 'Store Status' }
];

const API = 'http://localhost:5000/api/admin/menu';

function AdminDashboard() {
  const [tab, setTab] = useState('items');
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken') || '';

  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [storeOpen, setStoreOpen] = useState(true);

  const [newItem, setNewItem] = useState({ name: '', price: '', imageUrl: '', category: '', description: '' });
  const [newCat, setNewCat] = useState('');
  const [msg, setMsg] = useState('');

  const fetchAll = async () => {
    try {
      const [itemsRes, catRes, storeRes] = await Promise.all([
        fetch(`${API}/items`, { headers }),
        fetch(`${API}/categories`, { headers }),
        fetch(`${API}/store`, { headers })
      ]);
      setItems(await itemsRes.json());
      setCategories(await catRes.json());
      const store = await storeRes.json();
      setStoreOpen(!!store.isOpen);
    } catch (e) { setMsg('Failed to load admin data'); }
  };

  useEffect(() => { if (!token) navigate('/admin/login'); else fetchAll(); /* eslint-disable-next-line */ }, []);

  const addItem = async () => {
    try {
      const body = { ...newItem, price: Number(newItem.price), available: true };
      const res = await fetch(`${API}/items`, { method: 'POST', headers, body: JSON.stringify(body) });
      if (res.ok) { setNewItem({ name:'', price:'', imageUrl:'', category:'', description:'' }); fetchAll(); }
    } catch {}
  };

  const deleteItem = async (id) => {
    await fetch(`${API}/items/${id}`, { method: 'DELETE', headers });
    fetchAll();
  };

  const toggleItem = async (it) => {
    await fetch(`${API}/items/${it._id}`, { method: 'PUT', headers, body: JSON.stringify({ available: !it.available }) });
    fetchAll();
  };

  const addCategory = async () => {
    if (!newCat.trim()) return;
    await fetch(`${API}/categories`, { method: 'POST', headers, body: JSON.stringify({ name: newCat.trim() }) });
    setNewCat('');
    fetchAll();
  };

  const deleteCategory = async (id) => {
    await fetch(`${API}/categories/${id}`, { method: 'DELETE', headers });
    fetchAll();
  };

  const saveStore = async (isOpen) => {
    await fetch(`${API}/store/toggle`, { method: 'POST', headers, body: JSON.stringify({ isOpen }) });
    setStoreOpen(isOpen);
  };

  const logout = () => { localStorage.removeItem('adminToken'); navigate('/admin/login'); };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={{fontWeight:'bold', color:'#E23744'}}>Admin Dashboard</div>
        <button style={styles.logoutBtn} onClick={logout}>Logout</button>
      </header>

      <div style={styles.tabs}>
        {TABS.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{...styles.tabBtn, ...(tab===t.key?styles.tabActive:{})}}>
            {t.label}
          </button>
        ))}
      </div>

      {msg && <div style={styles.message}>{msg}</div>}

      <div style={styles.content}>
        {tab === 'items' && (
          <div>
            <div style={styles.sectionTitle}>Add Item</div>
            <div style={styles.formRow}>
              <input style={styles.input} placeholder="Name" value={newItem.name} onChange={e=>setNewItem({...newItem, name:e.target.value})} />
              <input style={styles.input} placeholder="Price" type="number" value={newItem.price} onChange={e=>setNewItem({...newItem, price:e.target.value})} />
              <input style={styles.input} placeholder="Image URL" value={newItem.imageUrl} onChange={e=>setNewItem({...newItem, imageUrl:e.target.value})} />
              <input style={styles.input} placeholder="Category" value={newItem.category} onChange={e=>setNewItem({...newItem, category:e.target.value})} />
              <input style={styles.input} placeholder="Description" value={newItem.description} onChange={e=>setNewItem({...newItem, description:e.target.value})} />
              <button style={styles.primaryBtn} onClick={addItem}>Add</button>
            </div>
            <div style={styles.sectionTitle}>Items</div>
            <div>
              {items.map(it => (
                <div key={it._id} style={styles.itemRow}>
                  <img alt={it.name} src={it.imageUrl} style={{width:50,height:36,objectFit:'cover',borderRadius:6, marginRight:10}} />
                  <div style={{flex:1}}>
                    <div style={{fontWeight:'bold'}}>{it.name} <span style={{color:'#999'}}>({it.category||'Uncategorized'})</span></div>
                    <div style={{color:'#666'}}>₹{it.price} · {it.available? 'Available':'Hidden'}</div>
                  </div>
                  <button style={styles.smallBtn} onClick={()=>toggleItem(it)}>{it.available?'Hide':'Show'}</button>
                  <button style={{...styles.smallBtn, background:'#e95c5c'}} onClick={()=>deleteItem(it._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'categories' && (
          <div>
            <div style={styles.sectionTitle}>Add Category</div>
            <div style={styles.formRow}>
              <input style={styles.input} placeholder="Category name" value={newCat} onChange={e=>setNewCat(e.target.value)} />
              <button style={styles.primaryBtn} onClick={addCategory}>Add</button>
            </div>
            <div style={styles.sectionTitle}>Categories</div>
            {categories.map(c => (
              <div key={c._id} style={styles.itemRow}>
                <div style={{flex:1}}>{c.name}</div>
                <button style={{...styles.smallBtn, background:'#e95c5c'}} onClick={()=>deleteCategory(c._id)}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === 'store' && (
          <div>
            <div style={styles.sectionTitle}>Store Status</div>
            <div style={{display:'flex', alignItems:'center', gap:12}}>
              <span>Current: <b>{storeOpen ? 'Open' : 'Closed'}</b></span>
              <button style={styles.primaryBtn} onClick={()=>saveStore(!storeOpen)}>{storeOpen ? 'Close Store' : 'Open Store'}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight:'100vh', background:'#fffaf7' },
  header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1em 2em', background:'#fff', borderBottom:'1px solid #eee' },
  logoutBtn: { background:'#555', color:'#fff', border:'none', borderRadius:8, padding:'0.5em 1.2em', cursor:'pointer' },
  tabs: { display:'flex', gap:12, padding:'1em 2em' },
  tabBtn: { background:'#fff', border:'1px solid #eee', borderRadius:10, padding:'0.6em 1.4em', cursor:'pointer', fontWeight:'bold', color:'#E23744' },
  tabActive: { background:'#E23744', color:'#fff', borderColor:'#E23744' },
  content: { background:'#fff', borderRadius:12, boxShadow:'0 3px 18px rgba(0,0,0,.05)', margin:'0 2em 2em', padding:'2em', minHeight:300 },
  formRow: { display:'flex', gap:10, flexWrap:'wrap', marginBottom:16 },
  input: { padding:'0.7em', borderRadius:8, border:'1px solid #ddd', outline:'none' },
  primaryBtn: { background:'#E23744', color:'#fff', border:'none', borderRadius:8, padding:'0.6em 1.2em', cursor:'pointer', fontWeight:'bold' },
  itemRow: { display:'flex', alignItems:'center', gap:10, padding:'0.6em 0', borderBottom:'1px solid #f2f2f2' },
  smallBtn: { background:'#888', color:'#fff', border:'none', borderRadius:8, padding:'0.4em 0.8em', cursor:'pointer', fontWeight:'bold' },
  sectionTitle: { fontWeight:'bold', color:'#E23744', margin:'0 0 10px 0' },
  message: { color:'#E23744', margin:'0 2em' }
};

export default AdminDashboard;
