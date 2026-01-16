import React from 'react';

export default function LoginPage({ onLogin, loggedOut }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      
      {/* SUCCESS MESSAGE (Shown after Logout) */}
      {loggedOut && (
        <div style={{ 
          backgroundColor: '#ecfdf5', color: '#059669', padding: '1rem', 
          borderRadius: '8px', marginBottom: '1.5rem', width: '100%', maxWidth: '400px',
          border: '1px solid #10b981', textAlign: 'center', fontWeight: '500', fontSize: '14px'
        }}>
          You have been successfully signed out.
        </div>
      )}

      {/* LOGIN CARD */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '3rem 2rem',
        backgroundColor: 'white',
        borderRadius: '2px', // Microsoft uses sharper corners
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        textAlign: 'center',
        border: '1px solid #d1d5db'
      }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
          alt="Microsoft" 
          style={{ width: '120px', marginBottom: '2rem' }} 
        />
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1b1b1b' }}>
          Sign in
        </h2>

        <button 
          onClick={onLogin}
          style={{ 
            width: '100%', 
            padding: '10px 12px', 
            backgroundColor: '#0067b8', // Official Microsoft Blue
            color: 'white', 
            border: 'none', 
            fontSize: '15px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005da6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0067b8'}
        >
          {/* Small 4-color square icon inside button */}
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path fill="#f25022" d="M0 0h7v7H0z"/>
            <path fill="#7fbb00" d="M9 0h7v7H9z"/>
            <path fill="#00a1f1" d="M0 9h7v7H0z"/>
            <path fill="#ffb900" d="M9 9h7v7H9z"/>
          </svg>
          Login with Microsoft 365
        </button>

        <div style={{ marginTop: '2rem', fontSize: '13px', color: '#666' }}>
          By clicking sign in, you agree to the <a href="#" style={{ color: '#0067b8' }}>Terms of Use</a>
        </div>
      </div>
    </div>
  );
}