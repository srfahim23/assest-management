import React, { useState, useEffect } from 'react';
import { testimonials } from '../assets';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-card">
        <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
        <p>"{testimonials[currentIndex].review}"</p>
        <strong>- {testimonials[currentIndex].name}</strong>
      </div>
    </section>
  );
};

export default Testimonials;