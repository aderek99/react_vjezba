import React from "react";

import "../style/AddNewMovie.css";


const AddNewMovie = () => {
  return (
    
    <div className="bodi">
      
      <div className="add-box">
          <h1 className="add">Add new movie</h1>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="type" placeholder="Genre of film" />
          <input type="number" name="type" placeholder="Number of stars" /><br/>
          <textarea type="text" className="subject" name="subject" placeholder="Short about the film.."></textarea>

          <input type="submit" name="add_submit" value="Add" />


      </div>
    </div>


  );
};

export default AddNewMovie;
