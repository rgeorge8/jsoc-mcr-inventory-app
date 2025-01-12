import React from "react";
import "./home.css";

const HomePage = ({ inventoryData, onLogout }) => {
  // Helper function to check if a string is a valid URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="home-container">
      <h1>Inventory Table</h1>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.length > 0 ? (
            inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  {isValidUrl(item.image) ? (
                    <img
                      src={item.image}
                      alt={item.description}
                      className="inventory-image"
                    />
                  ) : (
                    item.image
                  )}
                </td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available. Please upload an Excel file.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
