import React from "react";
import { TaskItem } from "./TaskItem/TaskItem";
import { TodoOptions } from "./TodoOptions/TodoOptions";

export const TodoList = () => {
  return (
    <div className="todo-list wrapper max-width">
      <div className="wrapper tasks">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
      <TodoOptions />
    </div>
  );
};
