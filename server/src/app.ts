import cors from "cors";
import "dotenv/config";
import express from "express";
import AiRouter from "./routers/ai";

const API_PREFIX = process.env.API_PREFIX;
const PORT = process.env.PORT || 5001;

const server = express();

server.use(cors()); // TODO: need to tidy this up before deploying
server.use(express.json());

// test route
server.get("/ping", (_, res) => {
  return res.send("pong");
});

server.get(`${API_PREFIX}/ping`, (_, res) => {
  return res.send("pong");
});

// imported routers
server.use(`${API_PREFIX}/ai`, AiRouter);

// and finally... serve
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
