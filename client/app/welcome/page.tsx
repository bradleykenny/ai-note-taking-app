"use client";

import { useQuery } from "@tanstack/react-query";

const Welcome = () => {
  const { data, isPending } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      return (await fetch("http://localhost:5001/api/v1/ai/message")).json();
    },
    initialData: undefined,
  });

  console.log({ data });

  return (
    <div>
      <h2 className="text-xl">Welcome</h2>
      {isPending && <p>loading...</p>}
      {data && <p>{data.content[0].text}</p>}
    </div>
  );
};

export default Welcome;
