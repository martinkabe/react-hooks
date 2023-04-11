import React from "react";
import UseEffectHook from "./components/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseStateHook from "./components/UseStateHook";
import UseRefHook from "./components/UseRefHook";

const App = () => {
  return (
    <>
      <div>
        <UseStateHook />
        <UseReducerHook />
        <UseEffectHook />
        <UseRefHook />
      </div>
    </>
  );
};

export default App;
