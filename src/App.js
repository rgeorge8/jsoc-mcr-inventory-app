// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import AddItemPage from "./AddItemPage";
import ItemDetails from "./ItemDetails";
import "./App.css";

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
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
