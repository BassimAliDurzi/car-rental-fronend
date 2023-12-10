import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import AllCarRentals from './admin/AllCarRentals';
import Login from './layout/Login';
import RentCar from './layout/RentCar';

const App = () => {
  return (
    <Router>
      <div>
        <h3 className="text-success">Fortnox Car Rental App</h3>
        <Navbar />
        <Routes>
          <Route path="/all-car-rentals" element={<AllCarRentals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rentCar" element={<RentCar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
