import React from "react";
import Card from "./Card";
import "../style/FavoriteMovies.css"


const FavoriteMovies = ({ favourites, removeFav }) => {
  const uniqueFavorites = Array.from(
    new Set(favourites.map((movie) => movie.id))
  );

  return (
    <>
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
    </>
  );
};

export default FavoriteMovies;
