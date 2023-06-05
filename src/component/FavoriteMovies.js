import React from "react";
import Card from "./Card";
import "../style/FavoriteMovies.css"
import slika24 from '../images/slika24.png';
import { FaRegCaretSquareRight } from "react-icons/fa";

const FavoriteMovies = ({ favourites, removeFav }) => {
  const uniqueFavorites = Array.from(
    new Set(favourites.map((movie) => movie.id))
  );

  return (
    <>
    <div className="containerFav">
    <img alt="" src={slika24}/>
    <p className="listP1">Watch your favorite movies <FaRegCaretSquareRight size="2rem"/></p>
      <h2 className="favTitle">Omiljeni filmovi</h2>
      <div className="sectionFavorite">
        {uniqueFavorites.map((movieId) => {
          const movie = favourites.find((movie) => movie.id === movieId);
          return (
            <Card
              key={movieId}
              film={movie}
              removeFav={removeFav}
              favourites={favourites}
            />
          );
        })}
      </div>
      </div>
    </>
  );
};

export default FavoriteMovies;
