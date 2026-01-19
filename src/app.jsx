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
        flexDirection: 'row',
        flex: 1, 
        height: isAuthenticated ? 'calc(100vh - 64px)' : '100vh', // Adjust for navbar height
        width: '100vw',
        overflow: 'hidden'
      }}>

        {/* LEFT PANE (40%) */}
        <aside style={{ 
          width: '40%', 
          height: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          padding: '2rem', 
          boxSizing: 'border-box',
          position: 'relative',
          backgroundColor: 'white',
          overflow: 'hidden',
          //borderRight: '1px solid #e5e7eb',
          //justifyContent: 'left',
        }}>
          <div style={{ position: 'absolute', top: '1.5rem', left: '2rem' }}>
            <img src={logoGroup} style={{ 
              height: '75px', 
              width: 'auto', 
              objectFit: 'contain' 
              }} 
              alt="Logo" />
          </div>
          {/* 2. WELCOME TEXT (Centered in the pane) */}
          <div style={{ position: 'absolute', top: isAuthenticated ? '15vh' : '20vh', left: '2rem', right: '2rem', zIndex: 2 }}>
            <h3 style={{ 
              margin: 0, 
              fontWeight: '700', 
              color: '#1b1b1b', 
              fontSize: '1.1rem',
              letterSpacing: '1px',
              marginBottom: '0.5rem',
            }}>
              WELCOME TO
            </h3>
            <h2 style={{ 
              margin: 0, 
              fontWeight: '700', 
              color: '#1b1b1b', 
              fontSize: '2rem',
              lineHeight: '1.1',
              maxWidth: '90%'
            }}>
              AS WATSON WIN PORTAL
            </h2>
          </div>

          {/* 3. LEGO GLOBE IMAGE */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: 'auto' }}>
            <img src={globeImg} style={{ 
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              maxWidth: '35vw',
              zIndex: 1,
              pointerEvents: 'none',
              opacity: 1
              //marginLeft: '-3rem',
              //height: 'auto',
              //marginBottom: '-3rem',
              }} 
              alt="Globe" />
          </div>
        </aside>

        {/* RIGHT PANE (70%) */}
        <main style={{ 
          width: '60%', 
          height: '100%',
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: isAuthenticated ? 'flex-start' : 'center', 
          padding: '2rem',
          boxSizing: 'border-box',
          overflowY: 'auto',
          backgroundColor: '#ffffff'
          //overflow: 'hidden' // Allows scrolling if grid is too big
        }}>
          <section key={location.pathname} className="page-transition" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Routes>
              <Route path="/" element={isAuthenticated ? ( <MainPage /> ) : 
              ( <LoginPage onLogin={handleLogin} loggedOut={showLogoutMessage} /> )} />
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
          <img src={logo} style={{ height: '40px', width: 'auto' }} alt="Sidebar Logo" />
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
