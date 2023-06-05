import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./component/Header";
import CardList from "./component/CardList";
import Footer from "./component/Footer";
import { setItem } from "../src/services/cacheService";
import FavoriteMovies from "./component/FavoriteMovies";
import Home from "./component/Home";
import "../src/style/App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./component/NotFound";
import MovieDetails from "./component/MovieDetails";
import Register from "./component/Register";
import Login from "./component/Login";
import AddNewMovie from "./component/AddNewMovie";

const savedLocalStorage = JSON.parse(
  localStorage.getItem("favourites") || "[]"
);
const API_URL = "https://dummyapi.online/api/movies";

function App() {
  const FAVORITES_MOVIES_CACHE_STORAGE_KEY = "favourites";
  const [posts, setPosts] = useState([]);
  const [favourites, setFavourites] = useState(savedLocalStorage);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    setItem(FAVORITES_MOVIES_CACHE_STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchMovies = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;

    setMovies(data);
  };
  useEffect(() => {
    searchMovies();
  }, []);

  const searchmovies = movies.filter((item) => {
    return item.movie.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log(searchTerm);
  console.log(searchQuery);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(posts);

  const removeFavouriteMovie = (movie) => {
    console.log(movie);
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  console.log(favourites);

  const hideHeaderAndFooter = () => {
    setShowHeader(false);
    setShowFooter(false);
  };

  const showHeaderAndFooter = () => {
    setShowHeader(true);
    setShowFooter(true);
  };

  return (
    <div>
      {showHeader && (
        <Header
          searchQuery={searchQuery}
          handleInputChange={handleInputChange}
          searchMovies={searchMovies}
          searchTerm={searchTerm}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={searchmovies}
              addToFavorites={addFavouriteMovie}
              favourites={favourites}
              setFavourites={setFavourites}
              removeFav={removeFavouriteMovie}
              hideHeaderAndFooter={hideHeaderAndFooter}
              showHeaderAndFooter={showHeaderAndFooter}
            />
          }
        />
        <Route
          path="/movieList"
          element={
            <CardList
              movies={searchmovies}
              addToFavorites={addFavouriteMovie}
              favourites={favourites}
              setFavourites={setFavourites}
              removeFav={removeFavouriteMovie}
              hideHeaderAndFooter={hideHeaderAndFooter}
              showHeaderAndFooter={showHeaderAndFooter}
              searchQuery={searchQuery}
              handleInputChange={handleInputChange}
              searchMovies={searchMovies}
              searchTerm={searchTerm}
            />
          }
        />
        <Route
          path="/movieList/:id"
          element={
            <MovieDetails
              movies={posts}
              hideHeaderAndFooter={hideHeaderAndFooter}
              showHeaderAndFooter={showHeaderAndFooter}
            />
          }
        />
        <Route
          path="/favoriteMovie"
          element={
            <FavoriteMovies
              favourites={favourites}
              removeFav={removeFavouriteMovie}
              hideHeaderAndFooter={hideHeaderAndFooter}
              showHeaderAndFooter={showHeaderAndFooter}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addMovie" element={<AddNewMovie />} />
        <Route
          path="*"
          element={
            <NotFound
              hideHeaderAndFooter={hideHeaderAndFooter}
              showHeaderAndFooter={showHeaderAndFooter}
            />
          }
        />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
