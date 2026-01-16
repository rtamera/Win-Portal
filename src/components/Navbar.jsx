import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onBurgerClick, isLoggedIn, onLogout }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav style={{ 
      height: '64px', display: 'flex', justifyContent: 'space-between', 
      alignItems: 'center', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb',
      padding: '0 24px', position: 'relative', zIndex: 100 
    }}>
      <button onClick={onBurgerClick} style={{ fontSize: '24px', cursor: 'pointer' }}>☰</button>

      {/* Transparent overlay to close menu when clicking away */}
      {showProfileMenu && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 998 }}
          onClick={() => setShowProfileMenu(false)} 
        />
      )}

      {isLoggedIn && (
        <div style={{ position: 'relative' }}>
          {/* THE BUBBLE PROFILE */}
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{ 
              width: '40px', height: '40px', borderRadius: '50%', 
              backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold',
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              border: 'none', cursor: 'pointer', fontSize: '14px'
            }}
          >
            JD
          </button>

          {/* DROPDOWN POPUP */}
          {showProfileMenu && (
            <div style={{ 
              position: 'absolute', top: '50px', right: '0', backgroundColor: 'white',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', borderRadius: '8px',
              padding: '8px', width: '160px', border: '1px solid #e5e7eb',
              zIndex: 999
            }}>
              <div style={{ padding: '8px', fontSize: '12px', color: '#9ca3af', borderBottom: '1px solid #f3f4f6' }}>
                john.doe@asw.com
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the click from "bubbling" up
                  onLogout();
                  setShowProfileMenu(false);
                }}
                style={{ 
                  width: '100%', textAlign: 'left', padding: '10px 8px', 
                  color: '#ef4444', backgroundColor: 'transparent', 
                  cursor: 'pointer', fontWeight: '600', border: 'none'
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}