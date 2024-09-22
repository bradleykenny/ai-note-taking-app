"use client";

import { Card, CardContent, CardHeader } from "@/components/Card";
import { Input } from "@/components/Input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Welcome = () => {
  const [text, setText] = useState("");
  const { data, isPending, mutateAsync } = useMutation({
    mutationKey: ["hello"],
    mutationFn: async (prompt: string) => {
      return (
        await fetch("http://localhost:5001/api/v1/ai/message", {
          body: JSON.stringify({ prompt }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        })
      ).json();
    },
  });

  console.log({ data });

  const handleClick = () => {
    mutateAsync(text);
  };

  return (
    <div className="container mx-auto px-12 my-10">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Welcome</h2>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-green-400 via-blue-600 to-purple-600 opacity-75 blur-md"></div>
            <Input
              className="relative flex items-center justify-center bg-white text-slate-800 text-xl h-14 px-4"
              onChange={(event) => setText(event.target.value)}
              placeholder="What's on your mind?"
            />
          </div>
          <button onClick={handleClick}>Submit</button>
          {isPending && <p>loading...</p>}
          {data && <p>{data.content[0].text}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default Welcome;
