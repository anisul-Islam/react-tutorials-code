import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholde.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("error while fetching the data");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  const errorMessage = error && <p> {error} </p>;
  const loadingMessage = isLoading && "data is loading";

  const todosElement =
    todos &&
    todos.map((todo) => (
      <div key={todo.id}>
        <p>{todo.title}</p>
      </div>
    ));

  return (
    <div>
      {errorMessage}
      {loadingMessage}
      {todosElement}
    </div>
  );
};

export default UseEffectHook;
