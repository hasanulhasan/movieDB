import { getMovieById } from '@/app/data/data';
import MovieDetails from '@/component/MovieDetails';
import React from 'react';

const MovieDetailsPage = ({params: {id}}) => {
  const movieId = parseInt(id)
  const movie = getMovieById(movieId);
  console.log(movie)
  return (
    <MovieDetails movieId={movieId} movie={movie}/>
  );
};

export default MovieDetailsPage;