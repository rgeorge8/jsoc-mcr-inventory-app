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

//   // State for delete confirmation
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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

//   // Handle the delete operation
//   const handleDelete = () => {
//     const updatedData = inventoryData.filter((invItem) => invItem.id !== item.id);
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
//             <button
//               className="delete-button"
//               onClick={() => setShowDeleteConfirm(true)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="delete-confirm-modal">
//           <p>Are you sure you want to delete this item?</p>
//           <button onClick={handleDelete}>Yes</button>
//           <button onClick={() => setShowDeleteConfirm(false)}>No</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemDetails;


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; // Import Firestore functions
// import { db } from "./firebase"; // Import Firestore DB
// import "./ItemDetails.css";

// const ItemDetails = ({ inventoryData, setInventoryData }) => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();

//   const item = inventoryData.find((item) => item.id === id);

//   const [quantity, setQuantity] = useState(item?.quantity || 0);
//   const [description, setDescription] = useState(item?.description || "");
//   const [image, setImage] = useState(item?.image || "");

//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

//   const handleSave = async () => {
//     if (quantity < 0) {
//       alert("Quantity must be a positive number.");
//       return;
//     }

//     const updatedItem = {quantity, description, image };
    
//     try {
//       const itemRef = doc(db, "inventory", id);
//       await updateDoc(itemRef, updatedItem); // person need to fix - updatedoc and how it interacts with firebase id

//       // Update the local state as well
//       const updatedData = inventoryData.map((invItem) =>
//         invItem.id === id ? { ...invItem, ...updatedItem } : invItem
//       );
//       setInventoryData(updatedData);
//       navigate("/home");
//     } catch (e) {
//       console.error("Error updating document: ", e);
//       alert("An error occurred while saving the item. Please try again.");
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const itemRef = doc(db, "inventory", id);
//       await deleteDoc(itemRef);

//       const updatedData = inventoryData.filter((invItem) => invItem.id !== id);
//       setInventoryData(updatedData);
//       navigate("/home");
//     } catch (e) {
//       console.error("Error deleting document: ", e);
//       alert("An error occurred while deleting the item. Please try again.");
//     }
//   };

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
//             <button
//               className="delete-button"
//               onClick={() => setShowDeleteConfirm(true)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="delete-confirm-modal">
//           <p>Are you sure you want to delete this item?</p>
//           <button onClick={handleDelete}>Yes</button>
//           <button onClick={() => setShowDeleteConfirm(false)}>No</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemDetails;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebase"; // Import Firestore DB
import "./ItemDetails.css";

const ItemDetails = ({ inventoryData, setInventoryData }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Fetch the item dynamically from Firebase
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemRef = doc(db, "inventory", id);
        const itemSnap = await getDoc(itemRef);
        if (itemSnap.exists()) {
          const itemData = itemSnap.data();
          setItem({ id, ...itemData });
          setQuantity(itemData.quantity || 0);
          setDescription(itemData.description || "");
          setImage(itemData.image || "");
        } else {
          console.error("No such item found!");
        }
      } catch (e) {
        console.error("Error fetching item:", e);
      }
    };

    fetchItem();
  }, [id]);

  const handleSave = async () => {
    if (quantity < 0) {
      alert("Quantity must be a positive number.");
      return;
    }

    const updatedItem = { quantity, description, image };
    
    try {
      const itemRef = doc(db, "inventory", id);
      await updateDoc(itemRef, updatedItem);

      // Update the local state as well
      const updatedData = inventoryData.map((invItem) =>
        invItem.id === id ? { ...invItem, ...updatedItem } : invItem
      );
      setInventoryData(updatedData);
      navigate("/home");
    } catch (e) {
      console.error("Error updating document: ", e);
      alert("An error occurred while saving the item. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const itemRef = doc(db, "inventory", id);
      await deleteDoc(itemRef);

      navigate("/home");
    } catch (e) {
      console.error("Error deleting document: ", e);
      alert("An error occurred while deleting the item. Please try again.");
    }
  };

  if (!item) {
    return <div>Loading item details...</div>;
  }

  return (
    <div className="item-details-container">
      <h1>Edit Item: {item.description}</h1>
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
