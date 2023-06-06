import "../style/Register.css";
import React from "react";
import slika23 from "../images/slika23.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bod">
      <div className="register-box">
        <div className="left">
          <h1 className="signUpH">Sign up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Repeat password"
          />
          <input type="submit" name="signup_submit" value="Sign up" /><br/>
          <p className="p">Already have an account? <Link to="/login" className="link">Sign in</Link></p>
        </div>
        <div className="right">
        <img className="imgRight" src={slika23} alt=""/>
      </div>
      </div>


    </div>
  );
};

export default Register;
