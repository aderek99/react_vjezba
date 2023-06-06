import React, { useState } from "react";

import "../style/AddNewMovie.css";

const AddNewMovie = () => {
  const [title, setTitle] = useState("");
  const [genere, setGenere] = useState("");
  const [star, setStar] = useState(0);
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, genere, star, subject };

    console.log(newMovie);
  };
  return (
    <div className="bodi">
      <div className="add-box">
        <h1 className="add">Add new movie</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="genere"
            value={genere}
            onChange={(e) => setGenere(e.target.value)}
            placeholder="Genre of film"
            required
          />
          <input
            type="number"
            name="star"
            value={star}
            onChange={(e) => setStar(e.target.value)}
            placeholder="Number of stars"
            required
          />
          <br />
          <textarea
            type="text"
            className="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Short about the film.."
            required
          ></textarea>

          <input type="submit" name="add_submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default AddNewMovie;
