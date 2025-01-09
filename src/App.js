import React, { useState } from "react";
import "./App.css";
import HomePage from "./home";


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
