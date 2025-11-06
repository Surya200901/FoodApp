import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdminRegister from './components/AdminRegister';

function AppRoutes() {
  const isAuthenticated = !!localStorage.getItem('token');
  const isAdminAuthenticated = !!localStorage.getItem('adminToken');
  const location = useLocation();

  const showPublicHeader =
    !isAuthenticated && !isAdminAuthenticated && ['/', '/login', '/register', '/admin/login'].includes(location.pathname);

  const showDashboardHeader =
    isAuthenticated && location.pathname.startsWith('/home');

  return (
    <>
      {showPublicHeader && <Header variant="public" />}
      {showDashboardHeader && <Header variant="dashboard" />}

      <Routes>
        {/* Public Landing */}
        <Route
          path="/"
          element={(isAuthenticated ? <Navigate to="/home" /> : (isAdminAuthenticated ? <Navigate to="/admin" /> : <LandingPage />))}
        />

        {/* User Auth */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />

        {/* Admin Auth */}
        <Route path="/admin/login" element={isAdminAuthenticated ? <Navigate to="/admin" /> : <AdminLogin />} />
        <Route path="/admin/register" element={isAdminAuthenticated ? <Navigate to="/admin" /> : <AdminRegister />} />
        <Route path="/admin" element={isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/admin/login" />} />

        {/* User Dashboard */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to={isAuthenticated ? '/home' : (isAdminAuthenticated ? '/admin' : '/')} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
