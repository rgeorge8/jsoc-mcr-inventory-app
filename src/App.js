// import React, { useState } from "react";
// import "./App.css";
// import HomePage from "./home";
// import ItemDetails from "./ItemDetails";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = () => {
//     if (username === "manchester" && password === "manchester") {
//       setIsLoggedIn(true);
//       setErrorMessage(""); // Clear any error messages
//     } else {
//       setErrorMessage("Invalid username or password. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {!isLoggedIn ? (
//             <Route
//               path="/"
//               element={
//                 <div className="login-container">
//                   <h1>Login</h1>
//                   <div className="input-group">
//                     <label htmlFor="username">Username:</label>
//                     <input
//                       type="text"
//                       id="username"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                   </div>
//                   <div className="input-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                       type="password"
//                       id="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   {errorMessage && <p className="error">{errorMessage}</p>}
//                   <button onClick={handleLogin}>Login</button>
//                 </div>
//               }
//             />
//           ) : (
//             <>
//               <Route
//                 path="/"
//                 element={<HomePage onLogout={handleLogout} />}
//               />
//               <Route path="/item/:id" element={<ItemDetails />} />
//             </>
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import ItemDetails from "./ItemDetails";
import * as XLSX from "xlsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inventoryData, setInventoryData] = useState([]);

  const handleLogin = () => {
    if (username === "manchester" && password === "manchester") {
      setIsLoggedIn(true);
      setErrorMessage(""); // Clear any error messages
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // Function to handle file upload and parse the Excel file
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      console.log(worksheet);
      setInventoryData(json); // Update the inventory data state with the parsed Excel data
    };
    reader.readAsArrayBuffer(file);
  };

  const updateItemQuantity = (id, newQuantity) => {
    setInventoryData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {!isLoggedIn ? (
            <Route
              path="/"
              element={
                <div className="login-container">
                  <h1>Login</h1>
                  <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {errorMessage && <p className="error">{errorMessage}</p>}
                  <button onClick={handleLogin}>Login</button>
                </div>
              }
            />
          ) : (
            <>
              <Route
                path="/"
                element={
                  <div>
                    <HomePage
                      inventoryData={inventoryData}
                      onLogout={handleLogout}
                    />
                    <div style={{ textAlign: "center", margin: "20px" }}>
                      <input
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                }
              />
              <Route
                path="/item/:id"
                element={<ItemDetails updateItemQuantity={updateItemQuantity} />}
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
