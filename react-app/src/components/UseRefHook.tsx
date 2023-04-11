import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");

  const onClick = () => {
    if (inputRef.current !== null) {
      setName(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Ex ..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default UseRefHook;
