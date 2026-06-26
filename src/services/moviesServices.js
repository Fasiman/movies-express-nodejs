import { movies } from "../data/movies.js";
import HttpError from "../helpers/HttpError.js";

export const addMovie = (movie) => {
  const nextId = movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1;
  const createdMovie = { id: nextId, ...movie };
  movies.push(createdMovie);
  return createdMovie;
};

export const deleteMovie = (id) => {
  const movieId = Number(id);
  const index = movies.findIndex((movie) => movie.id === movieId);

  if (index === -1) {
    throw HttpError(404, "Movie not found");
  }

  return movies.splice(index, 1)[0];
};
