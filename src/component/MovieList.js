import React from "react";
import Movie from "./Movie";

const MovieList = ({movieList}) => {

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
          movieList.map(movie => <Movie key={movie} movie={movie}/>)
        }
      </div>
    </div>
  );
};

export default MovieList;
