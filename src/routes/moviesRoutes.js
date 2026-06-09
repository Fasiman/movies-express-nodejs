import express from "express"
import { getMovies } from "../controller/moviesController.js"

const moviesRouter = express.Router()

moviesRouter.get("/", getMovies)

export default moviesRouter

