import React, { useState } from "react";

export default function USESTATE_OBJECT() {
  const [user, setUser] = useState({ userId: "", fullName: "" });
  const { userId, fullName } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fullName"
          //   value={user.fullName}
          value={fullName}
          onChange={handleChange}
        />
        <h1>
          User: {userId}, {fullName}
        </h1>
      </form>
    </div>
  );
}
