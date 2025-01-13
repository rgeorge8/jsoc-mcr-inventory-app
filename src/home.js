// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";
// import { Link } from "react-router-dom";
// import "./home.css";
// import Header from "./header";

// const HomePage = ({ inventoryData, setInventoryData, items }) => {
//   const [newItem, setNewItem] = useState({
//     id: "",
//     image: "",
//     quantity: "",
//     description: "",
//   });

//   // Function to handle downloading the Excel file
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
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   const [searchTerm, setSearchTerm] = useState("");
//   // Filter items based on the search term
//   const filteredItems = inventoryData.filter((item) =>
//     item.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="home-container">
//       <Header handleDownloadExcel={handleDownloadExcel} />

//         <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by description..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>



//       <table className="inventory-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Image</th>
//             <th>Quantity</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map((item) => (
//             <tr key={item.id}>
//               <td>
//                 <Link to={`/item/${item.id}`}>{item.id}</Link>
//               </td>
//               <td><img src={item.image} alt={item.desc} /></td>
              
//               <td>{item.quantity}</td>
//               <td>{item.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // Correct import
import "./home.css";
import Header from "./header";

const HomePage = ({ inventoryData, setInventoryData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on the search term
  const filteredItems = inventoryData.filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadExcel = () => {
    const currentDate = new Date();
    const dateString = `${currentDate.getDate().toString().padStart(2, '0')}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getFullYear()}`;
    const timeString = `${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}`;
    const filename = `inventory_${dateString}_${timeString}.xlsx`;

    const worksheet = XLSX.utils.json_to_sheet(inventoryData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");

    XLSX.writeFile(workbook, filename);
  };

  return (
    <div className="home-container">
      <Header handleDownloadExcel={handleDownloadExcel} />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/item/${item.id}`}>{item.id}</Link>
              </td>
              <td>
                {item.image ? (
                  <img src={item.image} alt={item.description} />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>
                <QRCodeCanvas value={`${window.location.origin}/item/${item.id}`} size={64} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;

