// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
// import "./AddItemPage.css";
// import Header from "./header";

// const AddItemPage = ({ inventoryData, setInventoryData }) => {
//   const navigate = useNavigate();
//   const [newItem, setNewItem] = useState({
//     id: "",
//     image: "",
//     quantity: "",
//     description: "",
//   });
//   const [quantity, setQuantity] = useState(0);
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");

//   const handleAddItem = () => {
//     const newItem = {
//       id: uuidv4(),
//       quantity,
//       description,
//       image,
//     };

//     const updatedInventory = [...inventoryData, newItem];
//     setInventoryData(updatedInventory);
//     localStorage.setItem("inventoryData", JSON.stringify(updatedInventory));

//     setNewItem({ id: "", image: "", quantity: "", description: "" });

//     navigate("/home");
//   };

//   const handleButtonClick = () => {
//     navigate("/home");  // Navigates to /home route
//   };


//   return (

//     <div className="add-item-page">
//       <Header></Header>
//       <h1>Add New Item</h1>
//       <form className="add-item-form">
//         <label className="add-item-form-label">
//           Description:
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <label className="add-item-form-label">
//           Quantity:
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(parseInt(e.target.value))}
//           />
//         </label>
//         <label className="add-item-form-label">
//           Image URL (optional):
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleAddItem}>
//           Add Item
//         </button>

//         <button onClick={handleButtonClick}>Go to Home</button>

//       </form>
//     </div>
//   );
// };

// export default AddItemPage;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
// import "./AddItemPage.css";
// import Header from "./header";

// const AddItemPage = ({ inventoryData, setInventoryData }) => {
//   const navigate = useNavigate();
//   const [quantity, setQuantity] = useState(0);
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");

//   const handleAddItem = () => {
//     const newItem = {
//       id: uuidv4(), // Unique identifier
//       quantity,
//       description,
//       image,
//     };

//     const updatedInventory = [...inventoryData, newItem];
//     setInventoryData(updatedInventory);
//     localStorage.setItem("inventoryData", JSON.stringify(updatedInventory));

//     setQuantity(0);
//     setDescription("");
//     setImage("");

//     navigate("/home");
//   };

//   const handleButtonClick = () => {
//     navigate("/home");
//   };



//   return (
//     <div className="add-item-page">
//       <Header />
//       <h1>Add New Item</h1>
//       <form className="add-item-form">
//         <label className="add-item-form-label">
//           Description:
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <label className="add-item-form-label">
//           Quantity:
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(parseInt(e.target.value))}
//           />
//         </label>
//         <label className="add-item-form-label">
//           Image URL (optional):
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleAddItem}>
//           Add Item
//         </button>
//         <button type="button" onClick={handleButtonClick}>
//           Go to Home
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItemPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebase"; // Import Firestore DB
import "./AddItemPage.css";
import Header from "./header";

const AddItemPage = ({ setInventoryData }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleAddItem = async () => {
    const newItem = {
      quantity,
      description,
      image,
    };

    try {
      const docRef = await addDoc(collection(db, "inventory"), newItem);
      console.log("Document written with ID: ", docRef.id);

      // You may need to update the inventory data (e.g., re-fetch or keep it in sync)
      setInventoryData(prevState => [...prevState, { ...newItem, id: docRef.id }]);

      setQuantity(0);
      setDescription("");
      setImage("");
      navigate("/home");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="add-item-page">
      <Header />
      <h1>Add New Item</h1>
      <form className="add-item-form">
        <label className="add-item-form-label">
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="add-item-form-label">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </label>
        <label className="add-item-form-label">
          Image URL (optional):
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
        <button type="button" onClick={handleButtonClick}>
          Go to Home
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
