import React from "react";
import Header from "../components/Header/Header";
import ImageSlider from "../components/Slider/ImageSlider";
import ProductCard from "../components/Product/ProductCard";

// Importing local images for slider
import clothImage from "../assets/cloth.jpeg";
import dailyImage from "../assets/daily.jpeg";
import dairyImage from "../assets/dairy.jpeg";
import elecImage from "../assets/elec.jpeg";
import fruitsImage from "../assets/fruits.jpeg";
import vegImage from "../assets/veg.jpeg";

const HomePage = () => {
  const products = [
    { id: 1, name: "Clothing", price: "₹2,500", image: clothImage },
    { id: 2, name: "Daily Needs", price: "₹1,200", image: dailyImage },
    { id: 3, name: "Dairy Products", price: "₹450", image: dairyImage },
    { id: 4, name: "Electronics", price: "₹12,000", image: elecImage },
    { id: 5, name: "Fruits", price: "₹600", image: fruitsImage },
    { id: 6, name: "Vegetables", price: "₹300", image: vegImage },
  ];

  const sliderImages = [
    clothImage,
    dailyImage,
    dairyImage,
    elecImage,
    fruitsImage,
    vegImage,
  ];

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
