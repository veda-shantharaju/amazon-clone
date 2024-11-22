import React from "react";
import "./Product.css";

const ProductCard = ({ product, discount }) => {
  return (
    <div className="product-card">
      <div className="product-badge">{discount} Off</div> {/* Dynamic Badge */}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Starting @ {product.price}</p>
    </div>
  );
};

export default ProductCard;
