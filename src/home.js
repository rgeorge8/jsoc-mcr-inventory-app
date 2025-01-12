import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import "./home.css";
import Header from "./header";

const HomePage = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [newItem, setNewItem] = useState({
    id: "",
    image: "",
    quantity: "",
    description: "",
  });

  // Load inventory data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("inventoryData");
    if (savedData) {
      setInventoryData(JSON.parse(savedData));
    }
  }, []);

  // Function to handle downloading the Excel file
  const handleDownloadExcel = () => {
    const currentDate = new Date();
    const dateString = `${currentDate.getDate().toString().padStart(2, '0')}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getFullYear()}`;
    const timeString = `${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}`;
    const filename = `inventory_${dateString}_${timeString}.xlsx`;

    const worksheet = XLSX.utils.json_to_sheet(inventoryData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");

    // Save the Excel file with the timestamped filename
    XLSX.writeFile(workbook, filename);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // Add new item to the inventory and update localStorage
  const handleAddItem = () => {
    if (!newItem.id || !newItem.quantity || !newItem.description) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedInventory = [...inventoryData, newItem];
    setInventoryData(updatedInventory);
    localStorage.setItem("inventoryData", JSON.stringify(updatedInventory));

    // Reset the form
    setNewItem({ id: "", image: "", quantity: "", description: "" });
  };

  return (
    <div className="home-container">
      <Header handleDownloadExcel={handleDownloadExcel} />
      <div>
        <br>
        </br>
        <br>
        </br>
      </div>

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
