import express from 'express'

const testRouter = express.Router()

testRouter.get("/test", (req, res) => {
  const databaseResponse = null;
  res.json(databaseResponse);
});

export default testRouter