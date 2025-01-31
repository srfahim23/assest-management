import React from 'react';
import { categories } from '../assets'; // Import categories

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.imageUrl} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;