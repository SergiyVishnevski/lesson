import React from "react";
import UserProfile from "./userProfile/UserProfile";

const Main = ({ users, title }) => {
  return (
    <main>
      <h3>{title}</h3>
      {users.map((user) => (
        <UserProfile user={user} />
      ))}
    </main>
  );
};

export default Main;
