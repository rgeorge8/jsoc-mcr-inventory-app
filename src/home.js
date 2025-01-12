// import React from "react";
// import "./home.css";

// const HomePage = ({ onLogout }) => {
//   const inventoryData = [
//     { id: 1, image: "🍎", quantity: 10, description: "Apples" },
//     { id: 2, image: "🍌", quantity: 15, description: "Bananas" },
//     { id: 3, image: "🥛", quantity: 5, description: "Milk cartons" },
//   ];

//   return (
//     <div className="home-container">
//       <h1>Inventory Table</h1>
//       <button className="logout-button" onClick={onLogout}>
//         Logout
//       </button>
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
//           {inventoryData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.image}</td>
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

import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const HomePage = ({ onLogout }) => {
  const inventoryData = [
    { id: 1, image: "🍎", quantity: 10, description: "Apples" },
    { id: 2, image: "🍌", quantity: 15, description: "Bananas" },
    { id: 3, image: "🥛", quantity: 5, description: "Milk cartons" },
  ];

  return (
    <div className="home-container">
      <h1>Inventory Table</h1>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
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
              <td>{item.image}</td>
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
