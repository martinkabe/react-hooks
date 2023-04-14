import React from "react";

interface Props {
  setUserName: (event: string) => void;
}

const Login = ({ setUserName }: Props) => {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
