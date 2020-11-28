import React from "react";
import { ClearCompletedBtn } from "./ClearCompletedBtn/ClearCompletedBtn";
import { Nav } from "./Nav/Nav";

export const TodoOptions = () => {
  return (
    <div className="todo-options wrapper">
      <span className="items-left"> 5 items left</span>
      <Nav />
      <ClearCompletedBtn />
    </div>
  );
};
