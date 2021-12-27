// import React, { useState } from "react";
// import NewTodo from "./components/STATE_LIFTING/NewTodo";
// import Todos from "./components/STATE_LIFTING/Todos";

// const dummyTodos = ["item1", "item2"];

// export default function App() {
//   const [todos, setTodods] = useState(dummyTodos);

//   const handleAddTodo = (newTodo) => {
//     setTodods([...todos, newTodo]);
//   };

//   return (
//     <div>
//       <NewTodo onAddTodo={handleAddTodo} />
//       <Todos todos={todos} />
//     </div>
//   );
// }

import React from "react";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default Todos;
