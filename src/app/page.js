"use client";
import MovieList from "@/component/MovieList";
import { getAllMovie } from "./data/data";

export default function Home() {
  const movieList = getAllMovie();

  return (
    <div>
      <MovieList movieList={movieList} />
    </div>
  );
}
