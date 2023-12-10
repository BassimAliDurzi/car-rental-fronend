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
        <header style={headerStyle}>
          <h3
            className="text-body"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
            Fortnox Car Rental App
          </h3>
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

const headerStyle = {
  backgroundColor: "#ffbf00",
  padding: "10px",
  textAlign: "center",
};

export default App;
