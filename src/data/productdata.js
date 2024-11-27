import clothImage from "../assets/cloth.jpeg";
import dailyImage from "../assets/daily.jpeg";
import dairyImage from "../assets/dairy.jpeg";
import elecImage from "../assets/elec.jpeg";
import fruitsImage from "../assets/fruits.jpeg";
import vegImage from "../assets/veg.jpeg";

export const products = [
  { id: 1, name: "Clothing", price: "₹30", image: clothImage, discount: "Up to 50%", category: "clothing" },
  { id: 2, name: "Daily Needs", price: "₹15", image: dailyImage, discount: "Up to 20%", category: "daily-needs" },
  { id: 3, name: "Dairy Products", price: "₹10", image: dairyImage, discount: "Up to 30%", category: "dairy-products" },
  { id: 4, name: "Electronics", price: "₹50", image: elecImage, discount: "Up to 70%", category: "electronics" },
  { id: 5, name: "Fruits", price: "₹20", image: fruitsImage, discount: "Up to 15%", category: "fruits" },
  { id: 6, name: "Vegetables", price: "₹10", image: vegImage, discount: "Up to 25%", category: "vegetables" },
];
