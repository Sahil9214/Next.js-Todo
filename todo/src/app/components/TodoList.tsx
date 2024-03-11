// TodoList.jsx
"use client";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

interface TodoListProps {
  todoList: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  console.log("todoList", todoList);
  const [todos, setTodos] = useState<Todo[]>(todoList);

  const handleStatus = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        marginTop: "30px",
        padding: "10px",
      }}
    >
      {todos.map((todo) => (
        <div key={todo.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => handleStatus(todo.id)}>
            {todo.status ? "Completed" : "Incomplete"}
          </button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
