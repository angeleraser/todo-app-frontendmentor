import React, { useContext, useMemo } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import { getTasksByView } from "../../../helpers/getTasksByView";
import { TaskItem } from "./TaskItem/TaskItem";
import { TodoOptions } from "./TodoOptions/TodoOptions";
export const TodoList = () => {
  const {
    todoState: { tasks, view },
  } = useContext(AppContext);
  const tasksCollection = useMemo(
    () =>
      getTasksByView({ arr: tasks, view }).map((taskProps) => (
        <TaskItem key={taskProps.id} {...taskProps} />
      )),
    [tasks, view]
  );
  return (
    <div className="todo-list wrapper max-width">
      <div className="wrapper tasks">
        {tasksCollection.length ? (
          tasksCollection
        ) : (
          <h2 className="no-tasks">You don't have any task...</h2>
        )}
      </div>
      <TodoOptions />
    </div>
  );
};
