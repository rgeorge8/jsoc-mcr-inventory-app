// src/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Assuming you have some CSS for header
import jsoyaLogo from "./jsoya.gif";

const Header = ({ handleDownloadExcel }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        {/* Wrap the logo with a Link */}
        <Link to="/">
          <img src={jsoyaLogo} alt="Church Inventory App Logo" />
        </Link>
      </div>
      <h1>Church Inventory</h1>
      <div className="header-actions">
        <Link to="/add-item">
          <button>Add New Item</button>
        </Link>
        <button onClick={handleDownloadExcel}>Download Inventory Excel</button>
        <button onClick={() => navigate("/")} className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;

