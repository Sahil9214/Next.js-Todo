// TodoInput.jsx;
"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/TodoInput.module.css";
import TodoList, { Todo } from "./TodoList";
import { todo } from "../constant/data";

const TodoInput = () => {
  const [todoList, setTodoList] = useState<Todo[]>(todo);
  const [status, setStatus] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [todoDataObj, setTodoDataObj] = useState<Todo>({
    id: Date.now(),
    title: "",
    description: "",
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoDataObj((prevTodoData) => ({
      ...prevTodoData,
      [name]: value,
    }));
  };

  function handleStatus() {
    setCount((count) => count + 1);
  }

  const handleAddTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, todoDataObj]);

    setTodoDataObj({
      id: Date.now(),
      title: "",
      description: "",
      status: false,
    });
    handleStatus();
  };
  useEffect(() => {
    console.log("count", count);
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <label className={styles.label}>Add Title</label>
        <br />
        <input
          className={styles.input}
          type="text"
          placeholder="Add Title here"
          name="title"
          value={todoDataObj.title}
          onChange={handleChange}
        />
        <br />
        <label className={styles.label}>Add Description</label>
        <br />
        <input
          className={styles.input}
          type="text"
          placeholder="Add Description "
          name="description"
          value={todoDataObj.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className={styles.button} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoInput;
