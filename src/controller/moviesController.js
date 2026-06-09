import { movies } from "../data/movies.js"

export const getMovies = (req, res) => {
    res.status(200).json(movies)
}
