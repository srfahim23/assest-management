import React from 'react';
import { products } from '../assets';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;