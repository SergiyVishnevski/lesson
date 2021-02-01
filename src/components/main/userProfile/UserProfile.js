import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <img src={user.avatar} alt="" width="64" />
      <p>Age: {user.age}</p>
      <p>Status: {user.status}</p>
    </div>
  );
};

export default UserProfile;
