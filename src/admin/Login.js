import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setLoginMessage("Login successful");
        navigate("/all-car-rentals");
      } else {
        setLoginMessage("Login failed");
      }
    } catch (error) {
      setLoginMessage("Error during login");
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="container mt-3">
      
      <div>
        {loginMessage && <p class="text-danger">{loginMessage}</p>}
        </div>

      <h6>Admin only*</h6>
      <form onSubmit={handleSubmit} className="was-validated">
        <div className="mb-3 mt-3">
          <label htmlFor="uname" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="uname"
            placeholder="Enter username"
            name="uname"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <button type="submit" className="btn btn-outline-warning btn-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
