import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Login from "./admin/Login";
import RentCar from "./layout/RentCar";
import AllCarRentals from "./admin/AllCarRentals";

const App = () => {
  return (
    <Router>
      <div>
        <header>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<RentCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/all-car-rentals" element={<AllCarRentals />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;
