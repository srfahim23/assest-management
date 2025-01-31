import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;