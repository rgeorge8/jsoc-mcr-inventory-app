// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./login.css";

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === 'manchester' && password === 'manchester') {
//       navigate('/home'); // Redirect to the Home page
//     } else {
//       alert('Incorrect username or password!');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <div className="login-form">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import "./login.css"; // Import the CSS file

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (username === "manchester" && password === "manchester") {
      onLogin();
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
