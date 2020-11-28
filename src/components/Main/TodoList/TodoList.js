import React, { useContext, useMemo } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import { getTasksByView } from "../../../helpers/getTasksByView";
import { TaskItem } from "./TaskItem/TaskItem";
import { TodoOptions } from "./TodoOptions/TodoOptions";
export const TodoList = () => {
  const {
    todoState: { tasks, view },
  } = useContext(AppContext);
  const tasksCollection = useMemo(() => getTasksByView({ arr: tasks, view }), [
    tasks,
    view,
  ]);
  return (
    <div className="todo-list wrapper max-width">
      <div className="wrapper tasks">
        {tasksCollection.map((taskProps) => (
          <TaskItem key={taskProps.id} {...taskProps} />
        ))}
      </div>
      <TodoOptions />
    </div>
  );
};
