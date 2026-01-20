import React, { useState, useEffect } from 'react';
import { menuItems, content } from '../config';

export default function Sidebar({ isOpen, onClose, logo }) {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar__header">
          <img src={logo} alt="AS Watson" className="sidebar__logo" />
          <button className="sidebar__close" onClick={onClose} aria-label="Close menu">
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
                        {child.icon && <span className="sidebar__submenu-icon">{child.icon}</span>}
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
    </>
  );
}
