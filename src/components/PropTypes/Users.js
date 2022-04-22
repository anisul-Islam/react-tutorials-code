import React, { useState } from "react";
import User from "./User";

const Users = () => {
  const [user, setUser] = useState({
    id: 1302020017,
    name: "anisul islam",
  });

  return (
    <>
      <User user={user} />
    </>
  );
};

export default Users;
