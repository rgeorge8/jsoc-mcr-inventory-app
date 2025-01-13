// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ItemDetails.css";

// const ItemDetails = ({ inventoryData, setInventoryData }) => {
//   const { id } = useParams(); // Get the item ID from the route
//   const navigate = useNavigate();

//   // Find the item (can be null if not found)
//   const item = inventoryData.find((item) => item.id === id);

//   // Initialize state unconditionally with fallback values
//   const [quantity, setQuantity] = useState(item?.quantity || 0);
//   const [description, setDescription] = useState(item?.description || "");
//   const [image, setImage] = useState(item?.image || "");

  

//   // Handle the save operation
//   const handleSave = () => {
//     if (quantity < 0) {
//       alert("Quantity must be a positive number.");
//       return;
//     }

//     const updatedData = inventoryData.map((invItem) =>
//       invItem.id === item.id
//         ? { ...invItem, quantity, description, image }
//         : invItem
//     );

//     setInventoryData(updatedData);
//     localStorage.setItem("inventoryData", JSON.stringify(updatedData));

//     navigate("/home");
//   };

//   // If item is not found, render a fallback UI
//   if (!item) {
//     return <div>Item not found. Please check the URL or go back.</div>;
//   }

//   return (
//     <div className="item-details-container">
//       <h1>Edit Item: {item.id}</h1>
//       <div className="item-details-card">
//         <div className="item-image">
//           {image.startsWith("http") ? (
//             <img src={image} alt={description} />
//           ) : (
//             <span className="emoji">{image}</span>
//           )}
//         </div>
//         <div className="item-details-fields">
//           <label>
//             Quantity:
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//             />
//           </label>
//           <label>
//             Description:
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </label>
//           <label>
//             Image URL (optional):
//             <input
//               type="text"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//             />
//           </label>
//           <div className="buttons">
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => navigate("/home")}>Cancel</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemDetails;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = ({ inventoryData, setInventoryData }) => {
  const { id } = useParams(); // Get the item ID from the route
  const navigate = useNavigate();

  // Find the item (can be null if not found)
  const item = inventoryData.find((item) => item.id === id);

  // Initialize state unconditionally with fallback values
  const [quantity, setQuantity] = useState(item?.quantity || 0);
  const [description, setDescription] = useState(item?.description || "");
  const [image, setImage] = useState(item?.image || "");

  // State for delete confirmation
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Handle the save operation
  const handleSave = () => {
    if (quantity < 0) {
      alert("Quantity must be a positive number.");
      return;
    }

    const updatedData = inventoryData.map((invItem) =>
      invItem.id === item.id
        ? { ...invItem, quantity, description, image }
        : invItem
    );

    setInventoryData(updatedData);
    localStorage.setItem("inventoryData", JSON.stringify(updatedData));

    navigate("/home");
  };

  // Handle the delete operation
  const handleDelete = () => {
    const updatedData = inventoryData.filter((invItem) => invItem.id !== item.id);
    setInventoryData(updatedData);
    localStorage.setItem("inventoryData", JSON.stringify(updatedData));
    navigate("/home");
  };

  // If item is not found, render a fallback UI
  if (!item) {
    return <div>Item not found. Please check the URL or go back.</div>;
  }

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
            <button onClick={() => navigate("/home")}>Cancel</button>
            <button
              className="delete-button"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="delete-confirm-modal">
          <p>Are you sure you want to delete this item?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowDeleteConfirm(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
