import { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <form className="form">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add task
      </button>
    </form>
  );
};
