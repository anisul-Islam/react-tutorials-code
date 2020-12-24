import React, { useState, useEffect } from "react";

export default function USE_EFFECT1() {
  const [counter, setCount] = useState(0);
  const [name, setName] = useState("");

  //run after every render - making side effect, we are updating dom after every render
  useEffect(() => {
    console.log("useEffect is called");
    document.title = `Clicked ${counter} times`;
  }, [counter]); //props or state that useEffect should depend to make any side effect

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(counter + 1)}>Increment</button>
    </div>
  );
}
