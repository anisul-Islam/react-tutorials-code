import React from "react";

const Child = (props) => {
  const data = "I am from child component";
  props.onChildData(data);

  return (
    <div>
      <p>I am child component</p>
      <p>{props.data}</p>
    </div>
  );
};

export default Child;
