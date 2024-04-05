import { getMovieById } from '@/app/data/data';
import Modal from '@/component/Modal';
import MovieDetails from '@/component/MovieDetails';
import React from 'react';

const MovieModal = ({params: {id}}) => {
  const movieId = parseInt(id)
  const movie = getMovieById(movieId);

  return (
    <Modal>
      <MovieDetails movieId={movieId} movie={movie}/>
    </Modal>
  );
};

export default MovieModal;