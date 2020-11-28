import React from "react";

export const TodoItem = () => {
  return (
    <div className="task-item">
      <div className="complete-task-btn">
        <button aria-label="Complete task button"></button>
      </div>
      <h3>Learn Javascript</h3>
      <button className="delete-task">X</button>
    </div>
  );
};
