// src/AddItemPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddItemPage.css";

const AddItemPage = () => {
  const [newItem, setNewItem] = useState({
    id: "",
    image: "",
    quantity: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    if (!newItem.id || !newItem.quantity || !newItem.description) {
      alert("Please fill out all fields.");
      return;
    }

    const savedData = localStorage.getItem("inventoryData");
    const inventoryData = savedData ? JSON.parse(savedData) : [];

    const updatedInventory = [...inventoryData, newItem];
    localStorage.setItem("inventoryData", JSON.stringify(updatedInventory));

    setNewItem({ id: "", image: "", quantity: "", description: "" });

    navigate("/home");
  };

  return (
    <div className="add-item-page">
      <h2>Add New Item</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
      >
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={newItem.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={newItem.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
