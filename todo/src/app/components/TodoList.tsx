"use client";
import React, { useEffect, useState } from "react";
import { todo } from "../constant/data";

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const TodoList: React.FC = () => {
  const [todoData, setTodo] = useState<Todo[]>(todo);
  const [status, setStatus] = useState(false);

  const handleStatus = (id: number) => {
    const updatedTodo = todoData.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );

    setTodo(updatedTodo);
  };
  //HandleDelete item;
  const handleDelete = (id: number) => {
    const deleteTodo = todoData.filter((el) => {
      if (el.id !== id) {
        return el;
      }
    });
    setTodo(deleteTodo);
  };
  useEffect(() => {
    setStatus(true);
  }, []);
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
      {todoData.map((el: Todo) => (
        <div key={el.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          <button onClick={() => handleStatus(el.id)}>
            {el.status ? "Completed" : "Incomplete"}
          </button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
