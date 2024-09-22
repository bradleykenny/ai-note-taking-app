import express, { Request } from "express";
import { invokePrompt } from "../services/BedrockService";

const aiRouter = express.Router();
aiRouter.get("/test", async (_, res) => {
  res.send("AI WORKING");
});

aiRouter.post("/message", async (req: Request<{ prompt: string }>, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    res.send("ERROR");
    return;
  }

  const result = await invokePrompt({ prompt: req.body.prompt });
  res.send(result);
});

export default aiRouter;
