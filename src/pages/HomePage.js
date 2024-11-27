import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import ImageSlider from "../components/Slider/ImageSlider";
import ProductCard from "../components/Product/ProductCard";
import Footer from "../components/Footer/Footer";
import { products } from "../data/productdata";  // Import product data

const HomePage = () => {
  const sliderImages = products.map(product => product.image);  // Dynamically generate slider images from products

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Space between Header and Slider */}
      <div style={{ marginBottom: "1.5rem" }}></div>

      {/* Image Slider with imported images */}
      <ImageSlider images={sliderImages} />

      {/* Space between Slider and Products */}
      <div style={{ marginBottom: "2rem" }}></div>

      {/* Product Cards */}
      <div className="product-list">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.category}`}>
            <ProductCard
              product={product}
              discount={product.discount} // Pass the dynamic discount
            />
          </Link>
        ))}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
