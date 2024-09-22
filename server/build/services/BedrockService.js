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
Object.defineProperty(exports, "__esModule", { value: true });
exports.invokePrompt = void 0;
const client_bedrock_runtime_1 = require("@aws-sdk/client-bedrock-runtime");
const client = new client_bedrock_runtime_1.BedrockRuntime({
    region: "ap-southeast-2",
    credentials: {
        secretAccessKey: process.env.SECRET_ACCESS_KEY || "",
        accessKeyId: process.env.ACCESS_KEY_ID || "",
    },
});
const invokePrompt = (_a) => __awaiter(void 0, [_a], void 0, function* ({ prompt }) {
    const modelId = "anthropic.claude-3-sonnet-20240229-v1:0";
    const input = {
        modelId,
        contentType: "application/json",
        accept: "application/json",
        body: JSON.stringify({
            anthropic_version: "bedrock-2023-05-31",
            max_tokens: 1000,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: prompt,
                        },
                    ],
                },
            ],
        }),
    };
    const command = new client_bedrock_runtime_1.InvokeModelCommand(input);
    const resp = yield client.send(command);
    const decodedResponseBody = JSON.parse(new TextDecoder().decode(resp.body));
    return {
        content: decodedResponseBody.content,
    };
});
exports.invokePrompt = invokePrompt;
