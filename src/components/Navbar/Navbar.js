
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/register" className="nav-link">Register</Link></li>
                
                <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/catalog" className="nav-link">Catalog</Link></li>
                    <li><Link to="/cart" className="nav-link">Cart</Link></li>
    
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
