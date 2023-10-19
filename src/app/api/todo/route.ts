import { NextResponse } from "next/server";

const POST = async (request: Request) => {
  const data = await request.json();
  console.log("postAPI", data);
  return NextResponse.json({ message: `Todo has been added` });
};

const GET = async () => {
  console.log("GET REQUEST");
  const res = await fetch("http://localhost:3004/todo", {
    method: "GET",
  });
  const todos = await res.json();
  //   console.log("todosAPI", typeof todos);
  console.log("todosAPI", todos);

  return NextResponse.json(todos);
};

export { POST, GET };
