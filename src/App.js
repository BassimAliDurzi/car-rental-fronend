import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Login from './layout/Login';
import RentCar from './layout/RentCar';
import AllCarRentals from './admin/AllCarRentals';

const App = () => {
  return (
    <Router>
      <div>
        <h3 className="text-success">Fortnox Car Rental App</h3>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/rentCar" element={<RentCar />} />
          <Route path="/all-car-rentals" element={<AllCarRentals />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
