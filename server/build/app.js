"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const ai_1 = __importDefault(require("./routers/ai"));
const API_PREFIX = process.env.API_PREFIX;
const PORT = process.env.PORT || 5001;
const server = (0, express_1.default)();
server.use((0, cors_1.default)()); // TODO: need to tidy this up before deploying
server.use(express_1.default.json());
// test route
server.get("/ping", (_, res) => {
    return res.send("pong");
});
server.get(`${API_PREFIX}/ping`, (_, res) => {
    return res.send("pong");
});
// imported routers
server.use(`${API_PREFIX}/ai`, ai_1.default);
// and finally... serve
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
