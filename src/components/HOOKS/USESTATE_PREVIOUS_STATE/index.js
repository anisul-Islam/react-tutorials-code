import React, { useState } from "react";
import styles from "./style.module.css";
export default function USESTATE_PREV() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {};

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleIncrement()}>Increment</button>
    </div>
  );
}
