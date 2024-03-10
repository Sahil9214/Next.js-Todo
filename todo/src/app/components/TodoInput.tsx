"use client";
import React, { useState } from "react";
import styles from "../styles/TodoInput.module.css";
import { Todo } from "./TodoList";
import { todo } from "../constant/data";
const TodoInput = () => {
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

  const handleAddTodo = () => {
    todo.push(todoDataObj);
    setTodoDataObj({
      id: Date.now(),
      title: "",
      description: "",
      status: false,
    });
  };

  return (
    <div className={styles.container}>
      <div>
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
    </div>
  );
};

export default TodoInput;