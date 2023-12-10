import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark text-bg-warning">
  <div className="container-fluid">
    <div className="mx-auto">
      <Link to="/" className="navbar-brand">
        <img src="/logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
      </Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item btn btn-outline-light text-dark">
              {!loggedIn ? (
                <Link to="/login" className="nav-link text-body">
                  Login
                </Link>
              ) : (
                <button className="nav-link text-success" onClick={onLogout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
