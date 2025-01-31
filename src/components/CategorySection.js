import React from 'react';
import { categories } from '../assets'; // Import categories

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Browse by Category</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.imageUrl} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;