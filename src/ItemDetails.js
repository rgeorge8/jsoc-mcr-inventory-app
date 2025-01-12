import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example data (replace with actual data source)
  const inventoryData = [
    { id: 1, image: "🍎", quantity: 10, description: "Apples" },
    { id: 2, image: "🍌", quantity: 15, description: "Bananas" },
    { id: 3, image: "🥛", quantity: 5, description: "Milk cartons" },
  ];

  const item = inventoryData.find((i) => i.id === parseInt(id));
  const [quantity, setQuantity] = useState(item?.quantity || 0);

  const handleSave = () => {
    alert(`Updated quantity for ${item.description}: ${quantity}`);
    navigate("/"); // Redirect back to the home page
  };

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Item Details</h1>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Image:</strong> {item.image}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <div>
        <label>
          <strong>Quantity:</strong>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <button onClick={handleSave} style={{ marginTop: "20px" }}>
        Save
      </button>
    </div>
  );
};

export default ItemDetails;


