// // import React, { useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import * as XLSX from "xlsx";
// // import "./ItemDetails.css";

// // const ItemDetails = ({ inventoryData, setInventoryData }) => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const item = inventoryData.find((item) => item.id === parseInt(id));

// //   const [quantity, setQuantity] = useState(item.quantity);
// //   const [description, setDescription] = useState(item.description);
// //   const [image, setImage] = useState(item.image);

// // //   const handleSave = () => {
// // //     const updatedData = inventoryData.map((invItem) =>
// // //       invItem.id === item.id
// // //         ? { ...invItem, quantity, description, image }
// // //         : invItem
// // //     );
// // //     setInventoryData(updatedData);

// // //     // Save to Excel
// // //     const worksheet = XLSX.utils.json_to_sheet(updatedData);
// // //     const workbook = XLSX.utils.book_new();
// // //     XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
// // //     XLSX.writeFile(workbook, "inventory.xlsx");

// // //     navigate("/");
// // //   };

// //     // const handleSave = () => {
// //     //     if (quantity < 0) {
// //     //     alert("Quantity must be a positive number.");
// //     //     return;
// //     //     }
    
// //     //     // if (image && !image.match(/\.(jpeg|jpg|gif|png)$/)) {
// //     //     // alert("Please provide a valid image URL.");
// //     //     // return;
// //     //     // }
    
// //     //     const updatedData = inventoryData.map((invItem) =>
// //     //     invItem.id === item.id
// //     //         ? { ...invItem, quantity, description, image }
// //     //         : invItem
// //     //     );
    
// //     //     setInventoryData(updatedData);
    
// //     //     // Save the updated inventory data to localStorage
// //     //     localStorage.setItem('inventoryData', JSON.stringify(updatedData));
    
// //     //     // Save to Excel
// //     //     const worksheet = XLSX.utils.json_to_sheet(updatedData);
// //     //     const workbook = XLSX.utils.book_new();
// //     //     XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
// //     //     XLSX.writeFile(workbook, "inventory.xlsx");
    
// //     //     navigate("/");
// //     // };

// //     // const handleSave = () => {
// //     //     if (quantity < 0) {
// //     //         alert("Quantity must be a positive number.");
// //     //         return;
// //     //     }
    
// //     //     // Update the inventory data
// //     //     const updatedData = inventoryData.map((invItem) =>
// //     //         invItem.id === item.id
// //     //             ? { ...invItem, quantity, description, image }
// //     //             : invItem
// //     //     );
    
// //     //     setInventoryData(updatedData);
    
// //     //     // Save the updated data to localStorage
// //     //     localStorage.setItem('inventoryData', JSON.stringify(updatedData));
    
// //     //     // Save to Excel (optional, can continue saving as inventory.xlsx)
// //     //     const worksheet = XLSX.utils.json_to_sheet(updatedData);
// //     //     const workbook = XLSX.utils.book_new();
// //     //     XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
// //     //     XLSX.writeFile(workbook, "inventory.xlsx");
    
// //     //     navigate("/");
// //     // };

// //     const handleSave = () => {
// //         if (quantity < 0) {
// //             alert("Quantity must be a positive number.");
// //             return;
// //         }
    
// //         // Update the inventory data
// //         const updatedData = inventoryData.map((invItem) =>
// //             invItem.id === item.id
// //                 ? { ...invItem, quantity, description, image }
// //                 : invItem
// //         );
    
// //         setInventoryData(updatedData);
    
// //         // Save the updated data to localStorage
// //         localStorage.setItem('inventoryData', JSON.stringify(updatedData));
    
// //         // Navigate back to the inventory page
// //         navigate("/");
// //     };
    
// //     // const handleDownloadExcel = () => {
// //     //     const worksheet = XLSX.utils.json_to_sheet(inventoryData);
// //     //     const workbook = XLSX.utils.book_new();
// //     //     XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
// //     //     XLSX.writeFile(workbook, "inventory.xlsx"); // Save as a single file
// //     // };

// //     const handleDownloadExcel = () => {
// //         // Get current date and time
// //         const currentDate = new Date();
// //         const dateString = `${currentDate.getDate().toString().padStart(2, '0')}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getFullYear()}`;
// //         const timeString = `${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}`;
    
// //         // Create filename using the current date and time
// //         const filename = `inventory_${dateString}_${timeString}.xlsx`;
    
// //         // Convert the inventory data to Excel format
// //         const worksheet = XLSX.utils.json_to_sheet(inventoryData);
// //         const workbook = XLSX.utils.book_new();
// //         XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
    
// //         // Save the Excel file with the timestamped filename
// //         XLSX.writeFile(workbook, filename);
// //     };
    
    
  

// //   return (
// //     <div className="item-details-container">
// //       <h1>Edit Item: {item.id}</h1>
// //       <div className="item-details-card">
// //         <div className="item-image">
// //           {image.startsWith("http") ? (
// //             <img src={image} alt={description} />
// //           ) : (
// //             <span className="emoji">{image}</span>
// //           )}
// //         </div>
// //         <div className="item-details-fields">
// //           <label>
// //             Quantity:
// //             <input
// //               type="number"
// //               value={quantity}
// //               onChange={(e) => setQuantity(parseInt(e.target.value))}
// //             />
// //           </label>
// //           <label>
// //             Description:
// //             <input
// //               type="text"
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)}
// //             />
// //           </label>
// //           <label>
// //             Image URL (optional):
// //             <input
// //               type="text"
// //               value={image}
// //               onChange={(e) => setImage(e.target.value)}
// //             />
// //           </label>
// //           <div className="buttons">
// //             <button onClick={handleSave}>Save</button>
// //             <button onClick={() => navigate("/")}>Cancel</button>
// //             <button onClick={handleDownloadExcel}>Download Excel</button> {/* New button */}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ItemDetails;



// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import * as XLSX from "xlsx";
// import "./ItemDetails.css";

// const ItemDetails = ({ inventoryData, setInventoryData }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const item = inventoryData.find((item) => item.id === parseInt(id));

//   const [quantity, setQuantity] = useState(item.quantity);
//   const [description, setDescription] = useState(item.description);
//   const [image, setImage] = useState(item.image);

//   // Function to handle saving the data and downloading the Excel file with timestamp
//   const handleDownloadExcel = () => {
//     const currentDate = new Date();
//     const dateString = `${currentDate.getDate().toString().padStart(2, '0')}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getFullYear()}`;
//     const timeString = `${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}`;
//     const filename = `inventory_${dateString}_${timeString}.xlsx`;

//     const worksheet = XLSX.utils.json_to_sheet(inventoryData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");

//     // Save the Excel file with the timestamped filename
//     XLSX.writeFile(workbook, filename);
//   };

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

//     // Save to localStorage
//     localStorage.setItem('inventoryData', JSON.stringify(updatedData));

//     navigate("/");
//   };

//   return (
//     <div className="item-details-container">
//       <h1>Edit Item: {item.id}</h1>
      
//       {/* Download Excel Button */}
//       <div className="download-button-container">
//         <button onClick={handleDownloadExcel}>Download Inventory Excel</button>
//       </div>

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
//             <button onClick={() => navigate("/")}>Cancel</button>
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
  const { id } = useParams();
  const navigate = useNavigate();
  const item = inventoryData.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(item.quantity);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState(item.image);

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
    localStorage.setItem('inventoryData', JSON.stringify(updatedData));

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
