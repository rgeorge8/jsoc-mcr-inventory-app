// import React from 'react';
// import './index.css';

// function App() {
//   return (
//     <div className="table-container">
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
//           {/* Sample row */}
//           <tr>
//             <td>1</td>
//             <td>
//               <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
//             </td>
//             <td>10</td>
//             <td>Sample description for item 1.</td>
//           </tr>
//           {/* Add more rows dynamically here */}
//           <tr>
//             <td>2</td>
//             <td>
//               <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
//             </td>
//             <td>10</td>
//             <td>Sample description for item 2.</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>
//               <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
//             </td>
//             <td>10</td>
//             <td>Sample description for item 3.</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './login';
// import Home from './home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from "react";
import "./App.css";
import HomePage from "./home";
import "./login.css"; // Import the CSS file


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <div className="App">
      {!isLoggedIn ? (
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
      ) : (
        <HomePage onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
