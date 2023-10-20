"use server";

import { revalidatePath } from "next/cache";

const addToDoHandler = async (formData: FormData) => {
  try {
    const title = formData.get("title");

    let response = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 1, title }),
    });
    response = await response.json();
    revalidatePath("/todo");
    return response;
  } catch (e:any) {
    console.log("ERROR", e);
    return { error: e.message };
  }

  // const todos = await fetch("http://localhost:3000/api/todo", {
  //   cache: "no-store",
  // });

  // const resToddo = await todos.json();
  // console.log("todosPage1", resToddo);
};

export { addToDoHandler };
