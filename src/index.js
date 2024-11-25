import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import App from "./App";
import 'leaflet/dist/leaflet.css';


// Reset CSS and Normalize
import "./styles/reset.css";
import "./styles/global.css";

// Create the root element and wrap App with ThemeProvider to provide the theme context
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>  {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
