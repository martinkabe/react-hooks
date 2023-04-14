import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    if (inputRef.current !== null) console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.value = "HELLO";
  }, []);

  return (
    <>
      <div className="App">
        <input
          type="text"
          ref={inputRef}
          value="MARTIN"
          style={{ width: 400, height: 60 }}
        />
      </div>
      <hr />
    </>
  );
};

export default UseLayoutEffectHook;
