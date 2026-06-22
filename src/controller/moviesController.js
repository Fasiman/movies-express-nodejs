import { movies } from "../data/movies.js"
import { movieSchema } from "../schemas/moviesSchemas.js"
import HttpError from "../helpers/HttpError.js"
import { addMovie } from "../services/moviesServices.js"

export const getMovies = (req, res) => {
    res.status(200).json(movies)
}

export const addMovies = async (req, res, next) => {
    try {
        const {error} = movieSchema.validate(req.body)
        if(error) {
            throw HttpError(400, error.message)
        }
        const result = await addMovie(req.body)
    } catch(error) {
        next(error)
    }
}

