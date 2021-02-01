import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

const user = [
  {
    name: "Liverpool",
    avatar:
      "https://i.pinimg.com/originals/c6/cb/c5/c6cbc5aa85e5c324b03c0ad751880638.png",
    age: 35,
    status: "FC",
  },
  {
    name: "Arsenal",
    avatar: "https://cdn.worldvectorlogo.com/logos/arsenal.svg",
    age: 35,
    status: "FC",
  },
  {
    name: "Liverpool",
    avatar:
      "https://i.pinimg.com/originals/c6/cb/c5/c6cbc5aa85e5c324b03c0ad751880638.png",
    age: 35,
    status: "FC",
  },
];

// const markup = users.reduce((acc, user) => {
//     acc += `<h2>${user.name}</h2>`;
//     return acc;
// })

const App = () => {
  return (
    <>
      <Header />
      <Main user={user} title="User info" />
      <Footer />
    </>
  );
};

export default App;
