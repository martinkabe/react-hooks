import React from "react";

interface Props {
  userName: string;
}

const User = ({ userName }: Props) => {
  return (
    <div>
      <h1>User: {userName}</h1>
    </div>
  );
};

export default User;
