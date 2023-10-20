import { ToDoForm } from "./components";
const ToDoPage = async () => {
  const todoRes = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  const todos = await todoRes.json();

  return (
    <>
      <ToDoForm todos={todos} />
    </>
  );
};

export { ToDoPage as default };
