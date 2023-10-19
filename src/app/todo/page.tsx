import { revalidatePath } from "next/cache";

const ToDoPage = async () => {
  const todoRes = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  const todo = await todoRes.json();

  const addToDoHandler = async (formData: FormData) => {
    "use server";

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

  return (
    <>
      <form action={addToDoHandler}>
        <input name="title" type="text" />
        <button>SUbmit</button>
      </form>
      {todo.map(({ title }: any, idx: number) => (
        <div key={idx}>{title}</div>
      ))}
    </>
  );
};

export { ToDoPage as default };
