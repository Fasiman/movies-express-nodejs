import express from "express"
import { getMovies } from "../controller/moviesController.js"
import { addMovies } from "../controller/moviesController.js"
const moviesRouter = express.Router()

moviesRouter.get("/", getMovies)
moviesRouter.post("/", addMovies)

export default moviesRouter

