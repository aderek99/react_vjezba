import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import CardList from './CardList';
import Card  from './Card';

const MovieDetails=() => {
    const { id } = useParams();
    const { data:movie, error, isPending } = useFetch("http://localhost:8000/movieList/" + id);
  return (
    <div>
        {isPending && <div>Loading... </div>}
        {error && <div>{error}</div>}
        {movie && <h2>{movie.rating}</h2>}
    </div>
  )
}

export default MovieDetails;