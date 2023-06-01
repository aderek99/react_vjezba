import "../style/Register.css";
import React from "react";
import slika23 from "../images/slika23.jpg";

const Register = () => {
  return (
    <body className="bod">
      <div className="register-box">
        <div className="left">
          <h1 className="">Sign up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Repeat password"
          />
          <input type="submit" name="signup_submit" value="Sign me up" />
        </div>
        <div class="right">
        <img className="imgRight" src={slika23} alt=""/>
      </div>
      </div>


    </body>
  );
};

export default Register;
