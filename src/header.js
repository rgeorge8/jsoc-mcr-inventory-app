// src/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you have some CSS for header
import jsoyaLogo from "./jsoya.gif";

const Header = ({ handleDownloadExcel }) => {
  return (
    <header>
      <div className="logo">
        <img src={jsoyaLogo} alt="Church Inventory App Logo" />      
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
