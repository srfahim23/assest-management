import React, { useState, useEffect } from 'react';
import { heroImages } from '../assets';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <img src={heroImages[currentImageIndex]} alt="Hero Banner" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;