import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Optional: for global styles

// Find the root element in index.html where the app will be mounted
const container = document.getElementById("root");

// Create a root instance using the modern React DOM client API
const root = ReactDOM.createRoot(container);

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
