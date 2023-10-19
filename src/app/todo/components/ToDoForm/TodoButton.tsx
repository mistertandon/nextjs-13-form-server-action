"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
const TodoButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button>{pending ? "... Wait" : "Submit"}</button>
    </>
  );
};

export default TodoButton;
