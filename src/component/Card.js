import React from "react";
import card3 from "../images/card3.jpg";
import "../style/Card.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import { useState } from "react";

const Card = ({ film, addToFavorites, removeFav, favourites }) => {

  console.log(favourites);
  let isFavorite = favourites.some((element) => film.id === element.id)
  

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
        labore laudantium deserunt fugiat numquam.<br/>
        {film.rating} <FaStar />
      </p>
  </div>
  </div>
</article>

    // <div className="flip-card">
    //   <div className="flip-card-inner">
    // <div className="flip-card-front">
    //   <img className="img_movie" src={a} alt="" />
    // </div>
    //     <div className="flip-card-back">
    // <p className="title">{film.movie}</p>
    // <p>
    //   {film.rating} <FaStar />
    // </p>
          // {favourite ? (
          //   <div className="star_icon">
          //     <FaHeart
          //       size={"1.5em"}
          //       onClick={() => {
          //         removeFav(film);
          //         setIsFav(!isFav);
          //       }}
          //     ></FaHeart>
          //   </div>
          // ) : (
          //   <div className="star_icon">
          //     <FaRegHeart
          //       size={"1.5em"}
          //       onClick={() => {
          //         addToFavorites(film);
          //         setIsFav(true);
          //       }}
          //     ></FaRegHeart>
          //   </div>
          // )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
