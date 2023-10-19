"use client";
import { addToDoHandler } from "@/actions/todoActions";

const ToDoForm = () => {
  return (
    <>
      <div>ToDo Form</div>
      <form action={addToDoHandler}>
        <input name="title" type="text" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ToDoForm;
