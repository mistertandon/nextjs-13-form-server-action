"use client";
import React, { useRef } from "react";
import { addToDoHandler } from "@/actions/todoActions";
import { TodoButton } from "./index";
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
        {/* <button>Submit</button> */}
        <TodoButton />
      </form>
    </>
  );
};

export default ToDoForm;
