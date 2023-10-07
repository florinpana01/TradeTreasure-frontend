// src/Navbar/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the component's CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">TradeTreasure</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
