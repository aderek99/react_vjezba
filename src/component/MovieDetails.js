import React from "react";
import { useParams } from "react-router-dom";
import "../style/MovieDetails.css";
import { FaStar } from "react-icons/fa";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  console.log(movies, id);
  return (
    <div>
      {movies.map((movie, index) => {
        if (movie.id === id*1) {
          return (
            <div key={index}>
              <div className="movie_card" id="bright">
                <div className="info_section">
                  <div className="movie_header">
                    <img
                      className="locandina" alt=""
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qUhpGacD-heXd1wjvYs6kQHaKD%26pid%3DApi&f=1&ipt=de5c155e0f12725843a7c88b80b7c386a3712b117f640e83ae1104d59d2982e3&ipo=images"
                    />
                    <h1 className="detailsH1">{movie.movie}</h1>
                    <h4 className="detailsH1">{movie.rating} <FaStar color="yellow" size="0.8rem" /></h4>
                    <p className="type">Type : Action</p><br/>
                    <span className="minutes">117 min</span> 
                    
                  </div>
                  <br/><br/><br/>
                  <div className="movie_desc">
                    <p className="text">
                      Set in a world where fantasy creatures live side by side
                      with humans. A human cop is forced to work with an Orc to
                      find a weapon everyone is prepared to kill for. Set in a world where fantasy creatures live side by side
                      with humans. A human cop is forced to work with an Orc to
                      find a weapon everyone is prepared to kill for.
                    </p>
                  </div>
                </div>
                <div className="blur_back bright_back"></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MovieDetails;
