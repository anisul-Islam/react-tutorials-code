import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"></label>
      <input type="text" name="todo" value={todo} onChange={handleTodoChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
