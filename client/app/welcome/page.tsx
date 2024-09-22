"use client";

import { CardContent, CardHeader } from "@/components/Card";
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
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="mx-10 sm:mx-24 md:mx-36 lg:mx-60 xl:mx-96 w-full flex gap-8 flex-col">
        <div>
          <h2 className="text-4xl font-bold">Welcome, Brad</h2>
        </div>
        <div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-75 blur-md animate-pulse"></div>
            <Input
              className="relative flex items-center justify-center bg-white text-slate-800 text-xl h-14 px-4 border-0"
              onChange={(event) => setText(event.target.value)}
              placeholder="What's on your mind?"
            />
            <button
              className="absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded-xl self-start"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl">
          {data && !isPending ? (
            <p>{data.content[0].text}</p>
          ) : (
            <p className="animate-pulse">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
