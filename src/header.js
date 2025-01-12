// src/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you have some CSS for header

const Header = ({ handleDownloadExcel }) => {
  return (
    <header>
      <div className="logo">
        <img src="your-logo.png" alt="Logo" />
      </div>
      <h1>Church Inventory App</h1>
      <div className="header-actions">
        <Link to="/add-item">
          <button>Add New Item</button>
        </Link>
        <button onClick={handleDownloadExcel}>Download Inventory Excel</button>
      </div>
    </header>
  );
};

export default Header;
