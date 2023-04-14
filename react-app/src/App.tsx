import React from "react";
import UseEffectHook from "./components/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseStateHook from "./components/UseStateHook";
import UseRefHook from "./components/UseRefHook";
import UseLayoutEffectHook from "./components/UseLayoutEffectHook";
import UseImperativeHandleHook from "./components/UseImperativeHandleHook";
import UseContextHook from "./components/UseContextHook";

const App = () => {
  return (
    <>
      <div>
        <UseStateHook />
        <UseReducerHook />
        <UseEffectHook />
        <UseRefHook />
        <UseLayoutEffectHook />
        <UseImperativeHandleHook />
        <UseContextHook />
      </div>
    </>
  );
};

export default App;
