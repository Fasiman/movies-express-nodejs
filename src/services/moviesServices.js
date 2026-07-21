import HttpError from "../helpers/HttpError.js";
import { readFile, writeFile, open } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../data/movies.json");

const readData = async () => {
  const data = await readFile(dataPath, "utf-8");
  return JSON.parse(data);
};

const writeData = async (data) => {
  // Пишем изменения и принудительно синхронизируем на диск,
  // чтобы они сохранялись сразу, без задержек ОС на кэширование.
  const json = JSON.stringify(data, null, 2);

  // Открываем файл в режиме записи, затем вызываем fsync
  // через FileHandle.sync() перед закрытием файла.
  const file = await open(dataPath, "w");
  try {
    await file.writeFile(json);
    await file.sync();
  } finally {
    await file.close();
  }
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
