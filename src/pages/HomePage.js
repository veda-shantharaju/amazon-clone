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
    { id: 1, name: "Clothing", price: "₹30", image: clothImage, discount: "Up to 50%" },
    { id: 2, name: "Daily Needs", price: "₹15", image: dailyImage, discount: "Up to 20%" },
    { id: 3, name: "Dairy Products", price: "₹10", image: dairyImage, discount: "Up to 30%" },
    { id: 4, name: "Electronics", price: "₹50", image: elecImage, discount: "Up to 70%" },
    { id: 5, name: "Fruits", price: "₹20", image: fruitsImage, discount: "Up to 15%" },
    { id: 6, name: "Vegetables", price: "₹10", image: vegImage, discount: "Up to 25%" },
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
          <ProductCard
            key={product.id}
            product={product}
            discount={product.discount} // Pass the dynamic discount
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
