import React from 'react';
import logo from '../../assets/ASWatsonLogo.png';

export default function LoginPage({ onLogin, loggedOut }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

      {/* LOGIN CARD */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        padding: '4rem 3rem',
        backgroundColor: 'white',
        borderRadius: '2px', // Microsoft uses sharper corners
        /*boxShadow: '0 2px 10px rgba(0,0,0,0.15)',*/
        textAlign: 'left',
        /*border: '1px solid #d1d5db'*/
      }}>
        
        {/* CONDITIONAL CONTENT: Logout Message vs. Default Logo/Text */}
        {loggedOut ? (
          /* THIS REPLACES THE LOGO AND TEXT WHEN LOGGED OUT */
          <div style={{ marginBottom: '2.5rem', marginTop: '1rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#1b1b1b', 
              margin: 0,
              lineHeight: '1.4' 
            }}>
              You have successfully logged out.
            </h2>
          </div>
        ) : (
          /* DEFAULT STATE: Logo and Edge notice */
          <>
        <img
          src={logo}
          alt="ASWatson Logo"
          style={{ width: '340px', marginBottom: '2.5rem', marginLeft:'-18px', display: 'block' }}
        />
        
        <p style={{ fontSize: '.85rem', fontWeight: 'normal', marginBottom: '2rem', color: '#1b1b1b', lineHeight: '1.6' }}>
          (This site is best viewed in Microsoft Edge)<br/>
          Please contact <b>system administrator</b> if you have any difficulties logging in.
        </p>
      </>
    )}
        {/* LOGIN BUTTON */}
        <button
          onClick={onLogin}
          style={{
            width: '100%',
            padding: '14px 16px',
            backgroundColor: '#363c4e',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2d3240'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#363c4e'}
        >
          {/* Small 4-color square icon inside button */}
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path fill="white" d="M0 0h7v7H0z"/>
            <path fill="white" d="M9 0h7v7H9z"/>
            <path fill="white" d="M0 9h7v7H0z"/>
            <path fill="white" d="M9 9h7v7H9z"/>
          </svg>
          Login with Microsoft 365
        </button>

        {/*<div style={{ marginTop: '2rem', fontSize: '13px', color: '#666' }}>
          By clicking sign in, you agree to the <a href="#" style={{ color: '#0067b8' }}>Terms of Use</a>
        </div>*/}
      </div>
    </div>
  );
}