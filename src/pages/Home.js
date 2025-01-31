import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductList from '../components/ProductList';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <ProductList />
      <Testimonials />
    </div>
  );
};

export default Home;