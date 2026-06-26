import express from "express";
import { getMovies, addMovies, deleteMovies } from "../controller/moviesController.js";

const moviesRouter = express.Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/", addMovies);
moviesRouter.delete("/:id", deleteMovies);

export default moviesRouter;

