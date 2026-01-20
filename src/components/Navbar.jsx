import React, { useState, useEffect } from 'react';

export default function Navbar({
  onBurgerClick,
  isLoggedIn,
  onLogout,
  userName = 'test.supplier3',
  userInitials = 'TS',
  userEmail = 'test.supplier3@aswatson.com',
  logo
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
    };

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  const handleUserClick = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    onLogout();
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar__left">
        <button
          className="navbar__hamburger"
          onClick={onBurgerClick}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {logo && <img src={logo} alt="AS Watson" className="navbar__logo" />}
      </div>

      {/* Right Section */}
      {isLoggedIn && (
        <div className="navbar__right">
          <div
            className="navbar__user"
            onClick={handleUserClick}
          >
            <span className="navbar__user-name">{userName}</span>
            <span className={`navbar__user-arrow ${showDropdown ? 'open' : ''}`}>
              ▼
            </span>
            <div className="navbar__user-avatar">
              {userInitials}
            </div>
          </div>

          {/* Dropdown */}
          <div className={`navbar__dropdown ${showDropdown ? 'active' : ''}`}>
            <div className="navbar__dropdown-header">
              <span className="navbar__dropdown-email">{userEmail}</span>
            </div>
            <button
              className="navbar__dropdown-item navbar__dropdown-item--danger"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
