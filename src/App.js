import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './hero';
import About from './about';
import ProductList from './ProductList';
import Testimonials from './Testmonials';
import Footer from './Footer';
import SurpriseMe from './SurpriseMe.js';
import './App.css';
document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    const colors = ["#ff0000", "#ff8000", "#ffff00", "#00ff00", "#0000ff", "#8000ff", "#ff0080"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.backgroundColor = randomColor;
    particle.style.left = `${e.clientX}px`;  
    particle.style.top = `${e.clientY}px`;  
    
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    document.body.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 500);
});


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" 
                element={
                    <>
                        <Hero />
                        <About />
                        <Testimonials />
                        <SurpriseMe/>
                    </>
                } />
                <Route path="/shop" element={<ProductList />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;