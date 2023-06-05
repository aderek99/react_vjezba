import React from "react";
import Card from "./Card";
import "../style/CardList.css";
import slika24 from '../images/slika24.png';



const CardList = ({ movies, addToFavorites, removeFav, favourites, searchQuery, handleInputChange, searchMovies, searchTerm }) => {
  
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
      <img alt="" src={slika24}/>
      <p className="listP">Your streaming guide for movies, TV shows & sports</p>
      <button className="buttonbtn">WATCH</button>
      
      <div>
    <input className="searchMovie"
      type="text"
      value={searchQuery}
      onChange={handleInputChange}
      placeholder="Search for movies..."
      onClick={() => searchMovies(searchTerm)}
      required
    />
        </div>
        <div className="section">
          
          {sortedMovies.map((movie, index) => (
            // <Link to={`/movieList/${movie.id}`}>
            <Card
            favourites={favourites}
              film={movie}
              key={movie.id}
              addToFavorites={addToFavorites}
              removeFav={removeFav}
            />
            // </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
