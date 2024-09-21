import express from "express";

const aiRouter = express.Router();
aiRouter.get("/test", async (_, res) => {
  res.send("AI WORKING");
});

export default aiRouter;
