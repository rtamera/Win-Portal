import React from 'react';
import winbiLogo from '../../assets/WINBinobg.png';
import aswinsightLogo from '../../assets/ASWINSIGHTnobg.png';
import winsustainableLogo from '../../assets/WINsustainableChoicesnobg.png';
import wincrmLogo from '../../assets/WINCRMnobg.png';
import winservicelevelLogo from '../../assets/WinLevelServicenobg.png';
import winscoreLogo from '../../assets/WinScorenobg.png';
import winbrandLogo from '../../assets/WinBrandnobg.png';
import linkbiLogo from '../../assets/Linkbinobg.png';

const gridItems = [
  { 
    id: 1, 
    name: 'WINbi', 
    logo: winbiLogo,
    desc: 'Visual your business of AS Watson in seconds'  
  },
  { 
    id: 2, 
    name: 'ASWInsight', 
    logo: aswinsightLogo,
    desc: 'Discover your opportunity in our major local market'  
  },
  { 
    id: 3, 
    name: 'WINSustainableChoices', 
    logo: winsustainableLogo,
    desc: 'Learn about sustainable choice preference in our customers'  
  },
  { 
    id: 4, 
    name: 'WINCRM', 
    logo: wincrmLogo,
    desc: 'Understanding how your target customers interact with your brand'  
  },
  { 
    id: 5, 
    name: 'WINServiceLevel', 
    logo: winservicelevelLogo,
    desc: 'Track on service level for delivery improvement'  
  },
  { 
    id: 6, 
    name: 'WinScore', 
    logo: winscoreLogo,
    desc: 'Collection on our NIV for analysis'  
  },
  { 
    id: 7, 
    name: 'WinBrand', 
    logo: winbrandLogo,
    desc: 'Centralized and streamlines supplier brand data submission'  
  },
  { 
    id: 8, 
    name: 'Linkbi', 
    logo: linkbiLogo,
    desc: 'Visual your business of AS Watson in seconds'  
  }
]

export default function MainPage() {
  return (
    /* This wrapper creates the 3x3 layout */
    <div style={{ 
      width: '100%', 
      height: '100%', 
      padding: '2vh 20px', 
      overflowY: 'auto', // Allows scrolling if grid is tall
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start' // Changed from 'center' to 'flex-start'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1.5vh 20px',
        width: '100%',
        maxWidth: '1000px',
        flexGrow: 1,
        minHeight: 0,
        height: '100%'
      }}>
        {gridItems.map((item) => (
          <button 
            key={item.id}
            className="grid-button"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1vh',
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              height: '100%',
              minHeight: 0,
              maxHeight: '28vh',
              boxSizing: 'border-box',
              overflow: 'hidden',
              height: '24vh'
            }}
          >
            {/* LOGO CONTAINER - This creates the "safe zone" */}
            <div style={{ 
              height: '40%', 
              width: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '8px'
            }}>
            {/* 1. Logo */}
            <img 
              src={item.logo} 
              alt={item.name} 
              style={{ height: '90%', maxHeight: '100%', objectFit: 'contain' }} 
            /></div>

            {/* 2. App Name */}
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: '700', 
              color: '#1b1b1b',
              marginBottom: '0.5rem'
            }}>
              {item.name}
            </span>

            {/* 3. Descriptive Text */}
            <p style={{ 
              fontSize: '0.75rem', 
              color: '#6b7280', 
              margin: 0,
              lineHeight: '1.4',
              textAlign: 'center'
            }}>
              {item.desc || "Description for this application."}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}