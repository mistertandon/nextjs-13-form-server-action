"use client";
import React, { useRef } from "react";
import { addToDoHandler } from "@/actions/todoActions";
import TodoButton from "./TodoButton";
const ToDoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      <div>ToDo Form</div>
      {/* <form action={addToDoHandler}> */}
      <form
        ref={formRef}
        action={async (formData) => {
          await addToDoHandler(formData);
          formRef?.current?.reset();
        }}
      >
        <input name="title" type="text" />
        <button>Submit</button>
      </form>
      <TodoButton />
    </>
  );
};

export default ToDoForm;
