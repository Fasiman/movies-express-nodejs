import { movieCreateSchema, movieDeleteSchema } from "../schemas/moviesSchemas.js";
import HttpError from "../helpers/HttpError.js";
import { addMovie, deleteMovie } from "../services/moviesServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../data/movies.json");

const getMovies = async (req, res) => {
  const data = await readFile(dataPath, "utf-8");
  const movies = JSON.parse(data);
  res.status(200).json(movies);
};

const addMovies = async (req, res) => {
  const { error } = movieCreateSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const result = await addMovie(req.body);
  res.status(201).json(result);
};

const deleteMovies = async (req, res) => {
  const { error } = movieDeleteSchema.validate(req.params);
  if (error) {
    throw HttpError(400, error.message);
  }

  const result = await deleteMovie(req.params.id);
  res.status(200).json({ message: "Movie deleted", movie: result });
};

export const getMoviesCtrl = ctrlWrapper(getMovies);
export const addMoviesCtrl = ctrlWrapper(addMovies);
export const deleteMoviesCtrl = ctrlWrapper(deleteMovies);

export { getMoviesCtrl as getMovies, addMoviesCtrl as addMovies, deleteMoviesCtrl as deleteMovies };