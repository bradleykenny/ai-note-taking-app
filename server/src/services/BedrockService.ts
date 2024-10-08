import {
  BedrockRuntime,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntime({
  region: "ap-southeast-2",
  credentials: {
    secretAccessKey: process.env.SECRET_ACCESS_KEY || "",
    accessKeyId: process.env.ACCESS_KEY_ID || "",
  },
});

interface InvokePromptRequest {
  prompt: string;
}

export const invokePrompt = async ({ prompt }: InvokePromptRequest) => {
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

  const command = new InvokeModelCommand(input);
  const resp = await client.send(command);

  const decodedResponseBody = JSON.parse(new TextDecoder().decode(resp.body));

  return {
    content: decodedResponseBody.content,
  };
};
