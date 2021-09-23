import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form">
            <span className="login100-form-title p-b-43"> Login to continue </span>

            <div className="wrap-input100">
              <input className="input100" type="text" placeholder="Email" />
            </div>

            <div className="wrap-input100">
              <input className="input100" type="password" placeholder="Password" />
            </div>

            <div className="flex-sb-m w-full p-t-3 p-b-32" style={{padding: "10px 6%"}}>
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100">
                  Remember me
                </label>
              </div>

              <div>
                <a href="#" className="txt1"> Forgot Password? </a>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
          </form>

          <div
            className="login100-more"
            style={{backgroundImage: "url('bg-01.webp')"}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
