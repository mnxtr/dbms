import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Add your CSS styling here

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Manufacturing DBMS</h2>
            <ul className="navbar-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/production">Production</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
