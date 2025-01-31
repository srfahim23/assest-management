import React from 'react';
import { testimonials } from '../assets'; // Import testimonials

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.avatar} alt={testimonial.name} />
            <p>"{testimonial.review}"</p>
            <strong>- {testimonial.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;