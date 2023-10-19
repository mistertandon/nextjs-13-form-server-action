"use server";

import { revalidatePath } from "next/cache";

const addToDoHandler = async (formData: FormData) => {
  const title = formData.get("title");
  await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 1, title }),
  });

  // const todos = await fetch("http://localhost:3000/api/todo", {
  //   cache: "no-store",
  // });

  // const resToddo = await todos.json();
  // console.log("todosPage1", resToddo);
  revalidatePath("/todo");
};

export { addToDoHandler };
