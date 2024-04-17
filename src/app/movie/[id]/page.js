'use client'
import { getAllMovie, getMovieById } from '@/app/data/data';
import MovieDetails from '@/component/MovieDetails';
import React from 'react';

const MovieDetailsPage = ({params: {id}}) => {
  const movieId = parseInt(id)
  const movie = getMovieById(movieId);
  const allMovie = getAllMovie();
  const checkIsMovie = allMovie.filter(movie=> movie.id === movieId);
    
  return (
    <>
    {
      checkIsMovie[0]?.id === movieId ? <> <MovieDetails movieId={movieId} movie={movie}/> </> : <> <h1>This movie with {movieId} id was not found!</h1> </>
    }
    </>
  );
};

export default MovieDetailsPage;