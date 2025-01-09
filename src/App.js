// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './index.css';

function App() {
  return (
    <div className="table-container">
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
          {/* Sample row */}
          <tr>
            <td>1</td>
            <td>
              <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
            </td>
            <td>10</td>
            <td>Sample description for item 1.</td>
          </tr>
          {/* Add more rows dynamically here */}
          <tr>
            <td>2</td>
            <td>
              <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
            </td>
            <td>10</td>
            <td>Sample description for item 2.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
            </td>
            <td>10</td>
            <td>Sample description for item 3.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
