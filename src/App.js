// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import AddItemPage from "./AddItemPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
