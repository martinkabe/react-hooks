import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null);
  return (
    <>
      <div>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button from Parent
        </button>
        <Button ref={buttonRef} />
      </div>
      <hr />
    </>
  );
};

export default UseImperativeHandleHook;
