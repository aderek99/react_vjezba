import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import { FaTv } from "react-icons/fa";

const Header = (searchQuery, handleInputChange, searchMovies, searchTerm) => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">
          Movie Time <FaTv className="iconTv" />
        </h1>
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

        </ul>
      </header>
    </div>
  );
};

export default Header;
