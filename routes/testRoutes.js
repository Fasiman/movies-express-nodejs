import express from 'express'

const testRouter = express.Router()

testRouter.get("/test", (req, res) => {
  //   res.send(null); send не видправляэ null на фронтенд, а метод json() це може робити, тому на практицi його використовують частiше
  const databaseResponse = null;
  res.json(databaseResponse);
});

export default testRouter