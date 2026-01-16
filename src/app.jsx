import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import Navbar from './components/Navbar';
import globeImg from './assets/Globe.png'; 
import logoGroup from './assets/ASW-185yrs-logo-group-en.png'; 
import logo from './assets/ASWatsonLogo.png';
import './style.css';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogoutMessage(false);
  }
  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogoutMessage(true);
  }

  const [accountOpen, setAccountOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* 1. FIXED NAVBAR */}
      { isAuthenticated && (
        <Navbar onBurgerClick={() => setIsMenuOpen(true)} 
        isLoggedIn={isAuthenticated}
        onLogout={handleLogout}
      />
      )}

      {/* 2. MAIN CONTENT AREA (The split) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', // THIS IS THE KEY: Forces Left and Right side-by-side
        flex: 1, 
        width: '100%',
        overflow: 'hidden'
      }}>

        {/* LEFT PANE (30%) */}
        <aside style={{ 
          width: '30%', 
          height: '100%',
          display: 'block', 
          flexDirection: 'column', 
          padding: '2rem', 
          borderRight: '1px solid #e5e7eb',
          boxSizing: 'border-box',
          position: 'relative',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <img src={logoGroup} style={{ 
              height: '60px', 
              width: 'auto', 
              objectFit: 'contain' 
              }} 
              alt="Logo" />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <img src={globeImg} style={{ 
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%', // Adjust size as needed
              maxWidth: '350px',
              height: 'auto',
              zIndex: 1,
              pointerEvents: 'none' // Allows clicks to pass through if needed
              }} 
              alt="Globe" />
          </div>
        </aside>

        {/* RIGHT PANE (70%) */}
        <main style={{ 
          width: '70%', 
          height: '100%',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '2rem',
          boxSizing: 'border-box',
          overflowY: 'auto' // Allows scrolling if grid is too big
        }}>
          <section key={location.pathname} className="page-transition" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Routes>
              <Route path="/" element={isAuthenticated ? ( <MainPage /> ) : 
              ( <LoginPage onLogin={handleLogin} loggedOut={showLogoutMessage} /> )} />
              {/*<Route path="/login" element={<LoginPage onLogin={handleLogin} />} />*/}
              {/*<Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />*/}
            </Routes>
          </section>
        </main>
      </div>

      {/* Sidebar Drawer Logic */}
      {isMenuOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }} 
          onClick={() => setIsMenuOpen(false)} 
        />
      )}
      
      <aside style={{ 
        position: 'fixed', top: 0, left: 0, height: '100%', width: '256px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 50, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        display: 'flex', flexDirection: 'column',
        backdropFilter: 'blur(10px)'
      }}>
        {/* TOP LOGO AREA */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={logoGroup} style={{ height: '40px', width: 'auto' }} alt="Sidebar Logo" />
          <button onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.2rem', cursor: 'pointer', border: 'none', background: 'none' }}>✕</button>
        </div>
        {/* NAV LINKS AREA */}
        <nav style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>
          
          <div className="sidebar-item"> 📁 Application List </div>
          
          {/* Dropdown 1: Account Management */}
          <div>
            <div className="sidebar-item" onClick={() => setAccountOpen(!accountOpen)} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>👤 Account Management</span>
              <span>{accountOpen ? '▴' : '▾'}</span>
            </div>
            {accountOpen && (
              <div style={{ paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <div className="sidebar-sub-item">User Profiles</div>
                <div className="sidebar-sub-item">Permissions</div>
              </div>
            )}
          </div>
          
          {/* Dropdown 2: Audit Log */}
          <div>
            <div className="sidebar-item" onClick={() => setAuditOpen(!auditOpen)} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>📋 Audit Log</span>
              <span>{auditOpen ? '▴' : '▾'}</span>
            </div>
            {auditOpen && (
              <div style={{ paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <div className="sidebar-sub-item">System Logs</div>
                <div className="sidebar-sub-item">Login Activity</div>
              </div>
            )}
          </div>
          
          <div className="sidebar-item"> 🏢 BU/Supplier Management </div>
          <div className="sidebar-item"> 💳 Subscription Plan </div>
        </nav>
      </aside>
    </div>
  ); // End of Return
} // End of App Function
