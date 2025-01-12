// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        {/* You can replace the "Logo.png" with your actual logo image */}
        <img src="Logo.svg" alt="Church Inventory App Logo" className="logo" />
      </div>
      <h1>Church Inventory App</h1>
    </header>
  );
};

export default Header;
