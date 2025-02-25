import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <header className="hero">
            
            <h2>Celebrate Holi with Safe & Natural Colors! 🌿🎨</h2>
            <p>Eco-friendly, skin-safe, and vibrant Holi colors made from organic ingredients.</p>
            <Link to="/shop" className="btn">Shop Now</Link>
        </header>
    );
};

export default Hero;
