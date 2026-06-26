// const express = require('express') commonjs

import express from "express";
import cors from "cors";

import moviesRouter from "./src/routes/moviesRoutes.js";
import productsRouter from "./src/routes/productsRoutes.js";
import testRouter from "./src/routes/testRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/products", productsRouter);
app.use("/test", testRouter);








app.use((req, res, next) => {
  res.status(404).json({ message: "404 not found. Сформуйте правильний маршрут!" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

app.listen(3006, () => {
  console.log("сервер запустився на порту 3006");
});
