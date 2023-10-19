import { ToDoForm } from "./components";
const ToDoPage = async () => {
  const todoRes = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  const todo = await todoRes.json();

  return (
    <>
      <ToDoForm />
      {todo.map(({ title }: any, idx: number) => (
        <div key={idx}>{title}</div>
      ))}
    </>
  );
};

export { ToDoPage as default };
