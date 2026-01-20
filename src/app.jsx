import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import Navbar from './components/Navbar';
import { branding, user, content, menuItems } from './config';
import globeImg from './assets/Globe.png';
import logoGroup from './assets/ASW-185yrs-logo-group-en.png';
import logo from './assets/ASWatsonLogo.png';
import './style.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
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

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isMenuOpen ? 'sidebar--open' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar__header">
          <img src={logo} alt="AS Watson" className="sidebar__logo" />
          <button className="sidebar__close" onClick={closeSidebar} aria-label="Close menu">
            &times;
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="sidebar__menu">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.expandable ? (
                <>
                  <button
                    className="sidebar__menu-item"
                    onClick={() => toggleMenu(item.id)}
                  >
                    <span className="sidebar__menu-icon">{item.icon}</span>
                    <span className="sidebar__menu-label">{item.label}</span>
                    <span className={`sidebar__menu-arrow ${expandedMenus[item.id] ? 'open' : ''}`}>
                      ▶
                    </span>
                  </button>
                  <div className={`sidebar__submenu ${expandedMenus[item.id] ? 'open' : ''}`}>
                    {item.children?.map((child) => (
                      <a key={child.id} href={child.link} className="sidebar__submenu-item">
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.link} className="sidebar__menu-item">
                  <span className="sidebar__menu-icon">{item.icon}</span>
                  <span className="sidebar__menu-label">{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <footer className="sidebar__footer">
          {content.footerVersion}
        </footer>
      </aside>
    </div>
  );
}
