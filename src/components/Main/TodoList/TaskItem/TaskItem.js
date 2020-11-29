import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  todo_ToggleCompleteTask,
  todo_DeleteTask,
} from "../../../../actions/todo";
import { AppContext } from "../../../../AppContext/AppContext";
import { CompleteTaskBtn } from "./Buttons/CompleteTaskBtn";
import { DeleteTaskBtn } from "./Buttons/DeleteTaskBtn";
import {
  handleItemDragStart,
  handleItemDragEnd,
} from "../../../../helpers/handleItemDragStart";
export const TaskItem = ({ name, id, done }) => {
  const { dispatch } = useContext(AppContext);
  const handleToggleCompleteTask = () => {
    dispatch(todo_ToggleCompleteTask(id));
  };
  const handleDeleteTask = () => {
    dispatch(todo_DeleteTask(id));
  };
  return (
    <div
      draggable={true}
      onDrag={handleItemDragStart}
      onDragEnd={handleItemDragEnd}
      className={`task-item${done ? " completed" : ""}`}>
      <CompleteTaskBtn onClick={handleToggleCompleteTask} done={done} />
      <button onClick={handleToggleCompleteTask} className="task-name">
        {name}
      </button>
      <DeleteTaskBtn onClick={handleDeleteTask} />
    </div>
  );
};

TaskItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
};

TaskItem.defaultProps = {
  name: "",
  id: new Date().getTime(),
  done: false,
};
