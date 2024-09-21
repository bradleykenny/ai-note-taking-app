import express from "express";
import { invokePrompt } from "../services/BedrockService";

const aiRouter = express.Router();
aiRouter.get("/test", async (_, res) => {
  res.send("AI WORKING");
});

aiRouter.get("/message", async (_, res) => {
	const prompt = await invokePrompt();
	
	res.send(prompt);
})

export default aiRouter;
