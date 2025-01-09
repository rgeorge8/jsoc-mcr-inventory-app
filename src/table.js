import React from 'react';
import './index.css';

function inventoryTable() {
  return (
    <div className="table-container">
      <h1>Inventory Table</h1>
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
          <tr>
            <td>1</td>
            <td>
              <img src="https://via.placeholder.com/50" alt="Sample Item" className="table-image" />
            </td>
            <td>10</td>
            <td>Sample description for item 1.</td>
          </tr>
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

export default inventoryTable;