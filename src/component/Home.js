import React from 'react';
import '../style/Home.css';
import bg2 from '../images/bg2.jpg';
import Card from './Card';

const Home = ({ movies, addToFavorites, removeFav, favourites }) => {
  return (
    <>
      <div className="background-image">
        <img className="img_movie" src={bg2} alt="" />
        <p>“You Know I Would’ve Won That Race If You Didn’t Cheat, Right?”</p>
      </div>
      <div className="sectionHome">
        {movies &&
          movies.map((movie) => (
            <Card
              favourites={favourites}
              film={movie}
              key={movie.id}
              addToFavorites={addToFavorites}
              removeFav={removeFav}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
