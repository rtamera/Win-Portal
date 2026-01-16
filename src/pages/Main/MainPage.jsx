import React from 'react';

export default function MainPage() {
  return (
    /* This wrapper creates the 3x3 layout */
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      //gridTemplateRows: 'repeat(3, 1fr)', 
      gap: '15px', 
      width: '100%', 
      maxWidth: '500px', 
      aspectRatio: '1 / 1' 
    }}>
      {[...Array(9)].map((_, i) => (
        <button key={i} className="app-btn">
          App {i + 1}
        </button>
      ))}
    </div>
  );
}