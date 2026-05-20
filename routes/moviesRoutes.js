import express from "express"

const moviesRouter = express.Router()

moviesRouter.get("/", (req, res) => {
  res.json(movies);
});


export default moviesRouter