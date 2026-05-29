// const express = require('express') commonjs

import moviesRouter from "./routes/moviesRoutes.js";
import productsRouter from "./routes/productsRoutes.js";
import testRouter from "./routes/testRoutes.js";

import { movies } from "./data/movies.js";
import { products } from "./data/products.js";

import express from "express";
import cors from "cors"
const app = express();

// const corsMiddleware = cors()
// app.use(corsMiddleware)


app.use(cors()) // скоротимо


// app.use((req, res, next) => {
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//   // res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// })

// app.set("json spaces", 2);

app.use(moviesRouter)
// app.use("/products", productsRouter)
// app.use("/test", testRouter)








app.use((req, res) => {
  res.status(404).json({"message": "404 not found. Сформуйте правильний маршрут!"})
})

app.listen(3000, () => {
  console.log("сервер запустився");
});
