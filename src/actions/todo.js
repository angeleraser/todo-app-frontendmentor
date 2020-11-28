import { getNewTask } from "../helpers/getNewTask";
import { todoTypes } from "../types/types";
export const todo_addNewTask = (name) => ({
  type: todoTypes.AddNewTask,
  payload: getNewTask(name),
});

export const todo_ToggleCompleteTask = (id) => ({
  type: todoTypes.ToggleCompleteTask,
  payload: id,
});

export const todo_DeleteTask = (id) => ({
  type: todoTypes.DeleteTask,
  payload: id,
});

export const todo_SwitchView = (name) => ({
  type: todoTypes.SwitchView,
  payload: name,
});

export const todo_ClearCompletedTasks = () => ({
  type: todoTypes.ClearCompletedTasks,
});
