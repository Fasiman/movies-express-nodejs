import HttpError from "../helpers/HttpError.js";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../data/movies.json");

const readData = async () => {
  const data = await readFile(dataPath, "utf-8");
  return JSON.parse(data);
};

const writeData = async (data) => {
  await writeFile(dataPath, JSON.stringify(data, null, 2));
};

export const addMovie = async (movie) => {
  const data = await readData();
  const nextId = data.length > 0 ? Math.max(...data.map((m) => m.id)) + 1 : 1;
  const createdMovie = { id: nextId, ...movie };
  data.push(createdMovie);
  await writeData(data);
  return createdMovie;
};

export const deleteMovie = async (id) => {
  const data = await readData();
  const movieId = Number(id);
  const index = data.findIndex((movie) => movie.id === movieId);

  if (index === -1) {
    throw HttpError(404, "Movie not found");
  }

  const deletedMovie = data.splice(index, 1)[0];
  await writeData(data);
  return deletedMovie;
};
