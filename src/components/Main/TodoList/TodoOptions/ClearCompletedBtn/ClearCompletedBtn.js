import React, { useContext } from "react";
import { todo_ClearCompletedTasks } from "../../../../../actions/todo";
import { AppContext } from "../../../../../AppContext/AppContext";

export const ClearCompletedBtn = () => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteCompletedTasks = () => {
    dispatch(todo_ClearCompletedTasks());
  };
  return (
    <button
      onClick={handleDeleteCompletedTasks}
      className="clear-completed-btn">
      Clear Completed
    </button>
  );
};
