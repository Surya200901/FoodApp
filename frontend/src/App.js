import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Header from './components/Header';

function AppRoutes() {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();

  const showPublicHeader =
    !isAuthenticated &&
    ['/', '/login', '/register'].includes(location.pathname);

  const showDashboardHeader =
    isAuthenticated && location.pathname.startsWith('/home');

  return (
    <>
      {/* Header Logic */}
      {showPublicHeader && <Header variant="public" />}
      {showDashboardHeader && <Header variant="dashboard" />}

      <Routes>
        {/* Public Landing */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <LandingPage />}
        />

        {/* Login / Register */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/home" /> : <Register />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/home' : '/'} />}
        />
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
