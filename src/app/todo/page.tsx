const ToDoPage = () => {
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
    console.log("todosPage:before");
    const todos = await fetch("http://localhost:3000/api/todo", { cache: 'no-store' });
    const resToddo = await todos.json();
    console.log("todosPage1", resToddo);
  };

  return (
    <>
      <form action={addToDoHandler}>
        <input name="title" type="text" />
        <button>SUbmit</button>
      </form>
    </>
  );
};

export { ToDoPage as default };
