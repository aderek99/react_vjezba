import "../style/Login.css";
import React from "react";
import slika23 from "../images/slika23.jpg";
import { Link } from "react-router-dom";

const Login = () => {
    return(
      <div className="bod">
      <div className="login-box">
        <div className="left">
          <h1 className="loginH1">Sign in</h1>

          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" name="signup_submit" value="Sign in" /><br/>
          <p className="p">Don't have an account? <Link to="/register" className="link">Sign up</Link></p>
        </div>
        <div className="right">
        <img className="imgRight" src={slika23} alt=""/>
      </div>
      </div>


    </div>
  );
};

export default Login;
