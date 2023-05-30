import React from "react";
import Card from "./Card";
import "../style/CardList.css";
import { Link } from "react-router-dom";

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
            <Link to={`/movieList/${movie.id}`}>
            <Card
            favourites={favourites}
              film={movie}
              key={movie.id}
              addToFavorites={addToFavorites}
              removeFav={removeFav}
            />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
