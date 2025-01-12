// import React, { useState } from "react";
import React, { useState, useEffect } from 'react';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./home";
import ItemDetails from "./ItemDetails";

// const App = () => {
//   const [inventoryData, setInventoryData] = useState([
//     { id: 1, image: "🍎", quantity: 10, description: "Apples" },
//     { id: 2, image: "🍌", quantity: 15, description: "Bananas" },
//     { id: 3, image: "https://example.com/milk.png", quantity: 5, description: "Milk cartons" },
//   ]);

const App = () => {
  const [inventoryData, setInventoryData] = useState([]);

  // Load inventory data from localStorage when the app loads
  useEffect(() => {
    const storedData = localStorage.getItem('inventoryData');
    if (storedData) {
      setInventoryData(JSON.parse(storedData));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage inventoryData={inventoryData} />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetails inventoryData={inventoryData} setInventoryData={setInventoryData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

