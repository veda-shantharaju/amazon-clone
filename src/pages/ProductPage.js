import React from 'react';
import { useParams } from 'react-router-dom';
import ProductListPage from '../components/Product/ProductListPage'; // Assuming you have a ProductListPage component for filtering products

const ProductPage = ({ products }) => {
  const { category } = useParams(); // Get category from URL params

  // Filter the products based on the category
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <ProductListPage products={filteredProducts} category={category} />
    </div>
  );
};

export default ProductPage;
