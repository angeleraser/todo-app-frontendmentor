import React, { useContext, useState } from "react";
import { todo_addNewTask } from "../../../actions/todo";
import { AppContext } from "../../../AppContext/AppContext";
export const CreateNewTodo = () => {
  const { dispatch } = useContext(AppContext);
  const [{ taskName, isInvalid }, setTaskName] = useState({
    taskName: "",
    isInvalid: false,
  });

  const handleAddTaskOnSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim().length > 4) {
      dispatch(todo_addNewTask(taskName));
      setTaskName("");
    } else {
      setTaskName({ taskName: "", isInvalid: true });
    }
  };
  const handleInputChange = ({ target: { value } }) => {
    setTaskName({ taskName: value, isInvalid: false });
  };
  return (
    <form
      onSubmit={handleAddTaskOnSubmit}
      className={`create-new-todo wrapper max-width task-item ${
        isInvalid ? "invalid" : ""
      }`}>
      <label htmlFor="task-name">
        <input
          autoComplete="off"
          value={taskName}
          onChange={handleInputChange}
          placeholder={`${
            isInvalid
              ? "Name must be at least 5 characters"
              : "Create a new todo..."
          }`}
          type="text"
          id="task-name"
          maxLength={40}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
