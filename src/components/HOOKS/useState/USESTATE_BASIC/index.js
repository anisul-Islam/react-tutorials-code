import React, { useState } from "react";

export default function HOOKS_USESTATE() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement} disabled={count === 5 ? true : false}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={count === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}
