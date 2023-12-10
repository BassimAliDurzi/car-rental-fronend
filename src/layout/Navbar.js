import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark text-bg-warning">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto">
            {loggedIn && (
              <li className="nav-item">
                <Link to="/all-car-rentals" className="nav-link text-success">
                  All Car Rentals
                </Link>
              </li>
            )}
            <li className="nav-item">
              {!loggedIn ? (
                <Link to="/login" className="nav-link text-success">
                  Login
                </Link>
              ) : (
                <button className="nav-link text-success" onClick={onLogout}>
                  Logout
                </button>
              )}
            </li>
            <li className="rent-car">
              <Link to="/rentCar" className="nav-link text-success">
                Rent Car
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
