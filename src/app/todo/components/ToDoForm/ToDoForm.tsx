"use client";
import React, {
  useRef,
  experimental_useOptimistic as useOptimistic,
} from "react";

import { addToDoHandler } from "@/actions/todoActions";
import { TodoButton } from "./index";
const ToDoForm = ({ todos }: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state: any, newTodo: any) => {
      return [...state, newTodo];
    }
  );
  return (
    <>
      <div>ToDo Form</div>
      {/* <form action={addToDoHandler}> */}
      <form
        ref={formRef}
        action={async (formData) => {
          addOptimisticTodo({
            id: Math.random(),
            title: formData.get("title"),
          });
          const result: any = await addToDoHandler(formData);

          if (result?.error) {
            console.log("Error occurred in API call", result?.error?.message);
          }

          formRef?.current?.reset();
        }}
      >
        <input name="title" type="text" />
        {/* <button>Submit</button> */}
        <TodoButton />
      </form>
      {Array.isArray(todos) &&
        optimisticTodos.map(({ title }: any, idx: number) => (
          <div key={idx}>{title}</div>
        ))}
    </>
  );
};

export default ToDoForm;
