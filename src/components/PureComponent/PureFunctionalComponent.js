import React, { useState, useMemo } from "react";

const PureFunctionalComponent = () => {
  const [userName, setUserName] = useState("");

  const handleUserName = () => {
    setUserName("Anisul Islam");
  };

  const setName = useMemo(() => {
    if (userName !== "") {
      return userName;
    }
    return false;
  }, [userName]);

  return (
    <div>
      {console.log("render")}
      <h1>UserName: {setName} </h1>
      <button onClick={handleUserName}>setName</button>
    </div>
  );
};

export default PureFunctionalComponent;
