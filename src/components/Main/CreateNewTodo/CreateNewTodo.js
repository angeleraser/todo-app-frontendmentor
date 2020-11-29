import React, { useContext, useState } from "react";
import { todo_addNewTask } from "../../../actions/todo";
import { AppContext } from "../../../AppContext/AppContext";
export const CreateNewTodo = () => {
  const { dispatch } = useContext(AppContext);
  const [taskName, setTaskName] = useState("");
  const handleAddTaskOnSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim().length > 4) {
      dispatch(todo_addNewTask(taskName));
      setTaskName("");
    }
  };
  const handleInputChange = ({ target: { value } }) => {
    setTaskName(value);
  };
  return (
    <form
      onSubmit={handleAddTaskOnSubmit}
      className="create-new-todo wrapper max-width task-item">
      <label htmlFor="task-name">
        <input
          value={taskName}
          onChange={handleInputChange}
          placeholder="Create a new todo..."
          type="text"
          id="task-name"
          maxLength={40}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
