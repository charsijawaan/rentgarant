import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#04454d" }}
    >
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src="logo.png" className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input_user"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control input_user"
                  placeholder="Email Address"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control input_pass"
                  placeholder="password"
                />
              </div>

              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="button" name="button" className="btn login_btn">
                  Signup
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Already have an account?
              <Link to="/login">
                <a class="ml-2">Login</a>
              </Link>
            </div>
            <div className="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
