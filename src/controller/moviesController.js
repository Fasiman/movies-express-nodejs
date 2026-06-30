import { movies } from "../data/movies.js";
import { movieCreateSchema, movieDeleteSchema } from "../schemas/moviesSchemas.js";
import HttpError from "../helpers/HttpError.js";
import { addMovie, deleteMovie } from "../services/moviesServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getMovies = (req, res) => {
    res.status(200).json(movies);
};

export const addMovies = async (req, res, next) => {
  try {
    const { error } = movieCreateSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const result = addMovie(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteMovies = async (req, res, next) => {
  // try {
  //   const { error } = movieDeleteSchema.validate(req.params);
  //   if (error) {
  //     throw HttpError(400, error.message);
  //   }

  //   const result = deleteMovie(req.params.id);
  //   res.status(200).json({ message: "Movie deleted", movie: result });
  // } catch (error) {
  //   next(error);
  // }
};


export default {
  getMovies: ctrlWrapper(getMovies),
  addMovies: ctrlWrapper(addMovie)
}