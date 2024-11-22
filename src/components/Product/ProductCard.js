import React from 'react';
import './Product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Starting @ {product.price}</p>
    </div>
  );
};

export default ProductCard;
