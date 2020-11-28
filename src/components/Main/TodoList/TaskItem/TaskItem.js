import React from "react";
import { CompleteTaskBtn } from "./Buttons/CompleteTaskBtn";
import { DeleteTaskBtn } from "./Buttons/DeleteTaskBtn";

export const TaskItem = () => {
  return (
    <div className="task-item">
      <CompleteTaskBtn />
      <button className="task-name">Learn Javascript</button>
      <DeleteTaskBtn />
    </div>
  );
};
