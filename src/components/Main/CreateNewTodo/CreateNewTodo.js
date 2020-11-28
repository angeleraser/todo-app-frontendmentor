import React from "react";

export const CreateNewTodo = () => {
  return (
    <form className="create-new-todo wrapper max-width">
      <label htmlFor="task-name">
        <input placeholder="Create a new todo..." type="text" id="task-name" />
      </label>
      <button>Save</button>
    </form>
  );
};
