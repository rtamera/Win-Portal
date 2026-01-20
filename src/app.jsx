import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { branding, user } from './config';
import globeImg from './assets/Globe.png';
import logoGroup from './assets/ASW-185yrs-logo-group-en.png';
import logo from './assets/ASWatsonLogo.png';
import './styles/index.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogoutMessage(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogoutMessage(true);
    setIsMenuOpen(false);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Navbar - only show when authenticated */}
      {isAuthenticated && (
        <Navbar
          onBurgerClick={() => setIsMenuOpen(true)}
          isLoggedIn={isAuthenticated}
          onLogout={handleLogout}
          userName={user.displayName}
          userInitials={user.initials}
          userEmail={user.email}
          logo={logo}
        />
      )}

      {/* Main Content Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: isAuthenticated ? 'calc(100vh - 60px)' : '100vh',
        marginTop: isAuthenticated ? '60px' : 0,
        width: '100vw',
        overflow: 'hidden'
      }}>
        {/* Left Pane - Hero Section */}
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
        }}>
          {/* Logo */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '2rem' }}>
            <img
              src={logoGroup}
              style={{ height: '75px', width: 'auto', objectFit: 'contain' }}
              alt="AS Watson 185 Years"
            />
          </div>

          {/* Welcome Text */}
          <div style={{
            position: 'absolute',
            top: isAuthenticated ? '15vh' : '20vh',
            left: '2rem',
            right: '2rem',
            zIndex: 2
          }}>
            <h3 style={{
              margin: 0,
              fontWeight: '700',
              color: '#1b1b1b',
              fontSize: '1.1rem',
              letterSpacing: '1px',
              marginBottom: '0.5rem',
            }}>
              {branding.welcomeText}
            </h3>
            <h2 style={{
              margin: 0,
              fontWeight: '700',
              color: '#1b1b1b',
              fontSize: '2rem',
              lineHeight: '1.1',
              maxWidth: '90%'
            }}>
              {branding.portalName}
            </h2>
          </div>

          {/* Globe Image */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: 'auto' }}>
            <img
              src={globeImg}
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                maxWidth: '35vw',
                zIndex: 1,
                pointerEvents: 'none',
                opacity: 1
              }}
              alt="Globe"
            />
          </div>
        </aside>

        {/* Right Pane - Content Area */}
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
        }}>
          <section key={location.pathname} className="page-transition" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated
                    ? <MainPage />
                    : <LoginPage onLogin={handleLogin} loggedOut={showLogoutMessage} />
                }
              />
            </Routes>
          </section>
        </main>
      </div>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={isMenuOpen}
        onClose={closeSidebar}
        logo={logo}
      />
    </div>
  );
}
