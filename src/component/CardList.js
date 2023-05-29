import React from "react";
import Card from "./Card";
import "../style/CardList.css";

const CardList = ({ movies, addToFavorites, removeFav, favourites }) => {
  const sortedMovies = [...movies].sort((a, b) => {
    if (a.movie < b.movie) {
      return -1;
    }
    if (a.movie > b.movie) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className="container">
        <div className="section">
          {sortedMovies.map((movie, index) => (
            <Card
            favourites={favourites}
              film={movie}
              key={movie.id}
              addToFavorites={addToFavorites}
              removeFav={removeFav}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
