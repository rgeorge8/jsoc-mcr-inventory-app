import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./ItemDetails.css";

const ItemDetails = ({ inventoryData, setInventoryData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = inventoryData.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(item.quantity);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState(item.image);

  const handleSave = () => {
    const updatedData = inventoryData.map((invItem) =>
      invItem.id === item.id
        ? { ...invItem, quantity, description, image }
        : invItem
    );
    setInventoryData(updatedData);

    // Save to Excel
    const worksheet = XLSX.utils.json_to_sheet(updatedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
    XLSX.writeFile(workbook, "inventory.xlsx");

    navigate("/");
  };

  return (
    <div className="item-details-container">
      <h1>Edit Item: {item.id}</h1>
      <div className="item-details-card">
        <div className="item-image">
          {image.startsWith("http") ? (
            <img src={image} alt={description} />
          ) : (
            <span className="emoji">{image}</span>
          )}
        </div>
        <div className="item-details-fields">
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Image URL (optional):
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <div className="buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => navigate("/")}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
