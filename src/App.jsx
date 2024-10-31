import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Principal from "./components/Principal";
import firebaseConfig from "./database/firebaseconfig";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
        </Routes>
    </Router>
  );
 
};

export default App;
