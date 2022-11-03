import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";
export const App = () => {
  const initialTodos: Todo[] = [
    {
      text: "Practice React TS",
      complete: false,
    },
    {
      text: "Drink beer",
      complete: true,
    },
    {
      text: "Not cry",
      complete: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <h4>React + Typescript</h4>
      <AddTodoForm addTodo={addTodo} />
      <TodoList toggleTodo={toggleTodo} todos={todos} />
    </div>
  );
};
