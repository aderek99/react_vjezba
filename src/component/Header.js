import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import { FaTv } from "react-icons/fa";

const Header = () => {
  return (

      <header className="header">
        <Link to="/"><h1 className="logo">
          Movie Time <FaTv className="iconTv" />
        </h1></Link>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movieList">List of movies</Link>
          </li>
          <li>
            <Link to="/favoriteMovie">Favorite movies</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <Link to="/addMovie">Add new</Link>
          </li>

        </ul>
      </header>

  );
};

export default Header;
