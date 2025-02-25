import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
        </div>
            <h1>Eco-Friendly Holi Colors</h1>
            <ul>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link href="sustainability">Why Organic?</Link></li>
                <li><a href="testimonials">Reviews</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
