import React, { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import { getTasksByView } from "../../../../helpers/getTasksByView";
import { ClearCompletedBtn } from "./ClearCompletedBtn/ClearCompletedBtn";
import { Nav } from "./Nav/Nav";

export const TodoOptions = () => {
  const {
    todoState: { tasks },
  } = useContext(AppContext);
  const { length: tasksCount } = getTasksByView({ arr: tasks, view: "Active" });
  return (
    <div className="todo-options wrapper">
      <span className="items-left"> {tasksCount} tasks left</span>
      <Nav />
      <ClearCompletedBtn />
    </div>
  );
};
