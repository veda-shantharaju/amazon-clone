import React, { useState } from 'react';
import ProductList from './ProductList';  // Import ProductList component
import './ProductListPage.css';  // Import styles for this page

const ProductListPage = ({ products, category }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('relevant');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  // Filters by subcategory
  const filters = {
    clothing: ['Men', 'Women', 'Kids'],
    'daily-needs': ['Packed Food', 'Frozen Food', 'Biscuits & Cookies', 'Cold Drinks', 'Masala & Dry Fruits', 'Oils & Dal'],
    'dairy-products': ['Milk', 'Yogurt', 'Paneer & Butter', 'Ghee'],
    electronics: ['Mobiles', 'Laptops', 'Tablets', 'Accessories'],
    fruits: ['Seasonal', 'Cuts', 'Exotics & Premium'],
    vegetables: ['Cuts & Sprouts', 'Leafy', 'Herbs & Seasonings'],
  };

  // Filter products based on search term, subcategory, and sorting option
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => (selectedSubCategory ? p.subCategory === selectedSubCategory : true))
    .sort((a, b) => {
      if (sortOption === 'low-to-high') return a.price - b.price;
      if (sortOption === 'high-to-low') return b.price - a.price;
      return 0;  // Default sorting by relevance
    });

  return (
    <div className="product-list-page">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="relevant">Relevant</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="subcategories">
        {filters[category]?.map((subCategory) => (
          <button
            key={subCategory}
            className={selectedSubCategory === subCategory ? 'active' : ''}
            onClick={() => setSelectedSubCategory(subCategory)}
          >
            {subCategory}
          </button>
        ))}
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductListPage;
