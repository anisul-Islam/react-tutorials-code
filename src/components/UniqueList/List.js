import React from "react";

import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description 1",
  },
  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo2 description 1",
  },
  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo3 description 1",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
