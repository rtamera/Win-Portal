import React, { useState, useEffect } from 'react';
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
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 900);
  const location = useLocation();

  // Track screen width for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        flexDirection: isNarrowScreen ? 'column' : 'row',
        flex: 1,
        height: isAuthenticated ? 'calc(100vh - 60px)' : '100vh',
        marginTop: isAuthenticated ? '60px' : 0,
        width: '100vw',
        overflow: isNarrowScreen ? 'auto' : 'hidden'
      }}>
        {/* Left Pane - Hero Section (compact header on narrow screens) */}
        {isNarrowScreen ? (
          /* Compact Header for Narrow Screens */
          <header style={{
            width: '100%',
            padding: '1.5rem 2rem',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
            flexShrink: 0,
          }}>
            <img
              src={logoGroup}
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
              alt="AS Watson 185 Years"
            />
            <div>
              <h3 style={{
                margin: 0,
                fontWeight: '700',
                color: '#1b1b1b',
                fontSize: '0.85rem',
                letterSpacing: '1px',
                marginBottom: '0.25rem',
              }}>
                {branding.welcomeText}
              </h3>
              <h2 style={{
                margin: 0,
                fontWeight: '700',
                color: '#1b1b1b',
                fontSize: '1.25rem',
                lineHeight: '1.1',
              }}>
                {branding.portalName}
              </h2>
            </div>
          </header>
        ) : (
          /* Full Left Pane for Wide Screens */
          <aside style={{
            width: '40%',
            minWidth: '360px',
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
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src={logoGroup}
                style={{ height: '75px', width: 'auto', objectFit: 'contain' }}
                alt="AS Watson 185 Years"
              />
            </div>

            {/* Welcome Text */}
            <div style={{
              zIndex: 2,
              marginBottom: '1rem',
            }}>
              <h3 style={{
                margin: 0,
                fontWeight: '700',
                color: '#1b1b1b',
                fontSize: '1rem',
                letterSpacing: '1.1px',
                //marginBottom: '0.1rem',
                WebkitTextStroke: '0.3px #1b1b1b',
              }}>
                {branding.welcomeText}
              </h3>
              <h2 style={{
                margin: 0,
                fontWeight: '700',
                color: '#1b1b1b',
                fontSize: '1.6rem',
                lineHeight: '1.1',
                maxWidth: '90%',
                letterSpacing: '1.1px',
                WebkitTextStroke: '0.5px #1b1b1b',
              }}>
                {branding.portalName}
              </h2>
            </div>

            {/* Globe Image */}
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: 'auto',
              flex: 1,
              minHeight: 0,
            }}>
              <img
                src={globeImg}
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  maxWidth: '35vw',
                  minWidth: '300px',
                  maxHeight: '60%',
                  objectFit: 'contain',
                  objectPosition: 'bottom left',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
                alt="Globe"
              />
            </div>
          </aside>
        )}

        {/* Right Pane - Content Area */}
        <main style={{
          width: isNarrowScreen ? '100%' : '60%',
          flex: isNarrowScreen ? 1 : 'none',
          height: isNarrowScreen ? 'auto' : '100%',
          minHeight: isNarrowScreen ? 0 : 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: isAuthenticated ? 'flex-start' : 'center',
          padding: '2rem',
          boxSizing: 'border-box',
          overflowY: isNarrowScreen ? 'visible' : 'auto',
          overflowX: 'hidden',
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
