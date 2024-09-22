"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BedrockService_1 = require("../services/BedrockService");
const aiRouter = express_1.default.Router();
aiRouter.get("/test", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("AI WORKING");
}));
aiRouter.post("/message", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    console.log(req.body);
    if (!prompt) {
        res.send("ERROR");
        return;
    }
    const result = yield (0, BedrockService_1.invokePrompt)({ prompt: req.body.prompt });
    res.send(result);
}));
exports.default = aiRouter;
