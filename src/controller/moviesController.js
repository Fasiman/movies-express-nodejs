import { movies } from "../data/movies.js";
import { movieCreateSchema, movieDeleteSchema } from "../schemas/moviesSchemas.js";
import HttpError from "../helpers/HttpError.js";
import { addMovie, deleteMovie } from "../services/moviesServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getMovies = async (req, res) => {
  res.status(200).json(movies);
};

const addMovies = async (req, res) => {
  const { error } = movieCreateSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const result = addMovie(req.body);
  res.status(201).json(result);
};

const deleteMovies = async (req, res) => {
  const { error } = movieDeleteSchema.validate(req.params);
  if (error) {
    throw HttpError(400, error.message);
  }

  const result = deleteMovie(req.params.id);
  res.status(200).json({ message: "Movie deleted", movie: result });
};

export const getMoviesCtrl = ctrlWrapper(getMovies);
export const addMoviesCtrl = ctrlWrapper(addMovies);
export const deleteMoviesCtrl = ctrlWrapper(deleteMovies);

export { getMoviesCtrl as getMovies, addMoviesCtrl as addMovies, deleteMoviesCtrl as deleteMovies };