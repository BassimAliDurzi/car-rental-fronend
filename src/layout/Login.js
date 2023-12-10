import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h5>Admin only*</h5>

        <form action="/action_page.php" className="was-validated">
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
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="myCheck"
              name="remember"
              required
            />
            <label className="form-check-label" htmlFor="myCheck">
              I agree on blabla.
            </label>
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Check this checkbox to continue.</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
