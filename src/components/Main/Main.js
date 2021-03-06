import React from "react";
import { CreateNewTodo } from "./CreateNewTodo/CreateNewTodo";
import { TodoList } from "./TodoList/TodoList";

export const Main = () => {
  return (
    <main className="main wrapper">
      <div className="content wrapper max-width">
        <CreateNewTodo />
        <TodoList />
        <div className="tip">Drag and drop to reorder list</div>
      </div>
    </main>
  );
};
