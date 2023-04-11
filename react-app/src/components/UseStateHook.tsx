import React, { InputHTMLAttributes, ReactHTMLElement, useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState("");

  let onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(newValue);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your name ..."
          onChange={onChangeHandle}
        />
        <p>{name}</p>
      </div>
      <hr />
    </>
  );
};

export default UseStateHook;
