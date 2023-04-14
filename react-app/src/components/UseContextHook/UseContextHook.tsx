import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const UseContextHook = () => {
  const [userName, setUsername] = useState("");
  return (
    <>
      <div>
        <Login setUserName={setUsername} />
        <User userName={userName} />
      </div>
      <hr />
    </>
  );
};

export default UseContextHook;
