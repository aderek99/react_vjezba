import React from "react";
import  '../style/Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-basic">
        <footer>
            <div className="social"><i className="ion-social-twitter"><FaTwitter color="#00acee" fontSize="1.5em"/></i><i className="ion-social-instagram"><FaInstagram color=" rgb(228, 64, 95)" fontSize="1.5em"/></i><i className="ion-social-facebook"><FaFacebook color="#3b5998" fontSize="1.5em"/></i></div>
            <ul className="list-inline">
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
            <p className="copyright">© Copyright 2023, All Rights Reserved by Globalsoft</p>
        </footer>
    </div>

  );
};

export default Footer;
