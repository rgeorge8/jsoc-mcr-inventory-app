// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./home";
// import AddItemPage from "./AddItemPage";
// import ItemDetails from "./ItemDetails";
// import LoginPage from "./LoginPage";
// import "./App.css";

// const App = () => {

//   const [inventoryData, setInventoryData] = useState(() => {
//     const storedData = localStorage.getItem("inventoryData");
//     return storedData ? JSON.parse(storedData) : [];
//   });
  

//   return (
//     <Router>
//       <Routes>

//         <Route path="/" element={<LoginPage />} 
//         />

//         <Route
//           path="/home"
//           element={<HomePage inventoryData={inventoryData} />}
//         />
//         <Route
//           path="/item/:id"
//           element={<ItemDetails inventoryData={inventoryData} setInventoryData={setInventoryData} />}
//         />
//         {/* <Route path="/add-item" element={<AddItemPage />} /> */}
//         <Route
//           path="/add-item"
//           element={<AddItemPage inventoryData={inventoryData} setInventoryData={setInventoryData} />}
//         />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import AddItemPage from "./AddItemPage";
import ItemDetails from "./ItemDetails";
import LoginPage from "./LoginPage";
import { db } from "./firebase"; // Import Firestore DB
import "./App.css";
import { collection, getDocs, onSnapshot } from "firebase/firestore";


const App = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {

    const fetchInventory = async () => {
      const querySnapshot = await getDocs(collection(db, "inventory"));
      const inventoryItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInventoryData(inventoryItems);
    };

    fetchInventory();

    // Listen for changes in the collection
    const unsubscribe = onSnapshot(collection(db, "inventory"), (snapshot) => {
      const inventoryItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setInventoryData(inventoryItems);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={<HomePage inventoryData={inventoryData} setInventoryData={setInventoryData} />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetails inventoryData={inventoryData} setInventoryData={setInventoryData} />}
        />
        <Route
          path="/add-item"
          element={<AddItemPage setInventoryData={setInventoryData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
