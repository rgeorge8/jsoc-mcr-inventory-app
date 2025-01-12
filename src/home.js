import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage = ({ inventoryData }) => {
  return (
    <div className="home-container">
      <h1>Inventory Table</h1>
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
          {inventoryData.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/item/${item.id}`}>{item.id}</Link>
              </td>
              <td>
                {item.image.startsWith("http") ? (
                  <img src={item.image} alt={item.description} className="inventory-image" />
                ) : (
                  item.image
                )}
              </td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
