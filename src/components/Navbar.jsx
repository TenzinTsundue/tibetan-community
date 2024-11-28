import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Tibetan Canadian Community</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/business">Businesses</Link></li>
        <li><Link to="/support-groups">Support Groups</Link></li>
        <li><Link to="/rentals">Rentals</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
