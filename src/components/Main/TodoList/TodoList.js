import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodoList = () => {
  return (
    <div className="todo-list wrapper max-width">
      <div className="wrapper tasks">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};
