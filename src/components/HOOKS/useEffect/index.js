import React, { useState, useEffect } from "react";

export default function USE_EFFECT() {
  const [count, setCount] = useState(0);

  //run after every render - we can update dom, fetch data and so on here
  useEffect(() => {
    console.log("useEffect is called");
  }, []); //props or state that useEffect should depend to make any side effect

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
