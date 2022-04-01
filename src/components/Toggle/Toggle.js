import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel ipsam
          error ex? Doloribus voluptatibus, esse et culpa ullam cum consequuntur
          aperiam alias sapiente! Itaque similique delectus fugit labore
          doloribus?
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
