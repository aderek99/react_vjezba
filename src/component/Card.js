import React from "react";
import card3 from "../images/card3.jpg";
import "../style/Card.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Card = ({ film, addToFavorites, removeFav, favourites, movie }) => {
  let isFavorite = favourites.some((element) => film.id === element.id);

  return (
    <article className="card">
      <img
        className="card__background"
        src={card3}
        alt=""
        width="1920"
        height="2180"
      />
      {isFavorite ? (
        <div className="star_icon">
          <FaHeart
            size={"1.5em"}
            onClick={() => {
              removeFav(film);
            }}
          ></FaHeart>
        </div>
      ) : (
        <div className="star_icon">
          <FaRegHeart
            size={"1.5em"}
            onClick={() => {
              addToFavorites(film);
            }}
          ></FaRegHeart>
        </div>
      )}
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{film.movie}</h2>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
            labore laudantium deserunt.
            <br />
            {film.rating} <FaStar />
          </p>
          <Link to={`/movieList/${film.id}`}>
          <button className="card__button">Read more</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
