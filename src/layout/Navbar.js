import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark text-bg-warning">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
          </Link>
        </div>
        <div
  className="text-center"
  style={{
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    fontSize: "24px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  }}
>
  <span className="navbar-text text-dark">Fortnox Car Rental App</span>
</div>
        <div className="d-flex align-items-center">
          <ul className="navbar-nav">
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
