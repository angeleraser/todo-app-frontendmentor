import { todoTypes } from "../types/types";

export const todo_initialState = {
  tasks: [],
  view: "All",
};

export const todoReducer = (state = todo_initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case todoTypes.AddNewTask:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case todoTypes.ToggleCompleteTask:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, done: !task.done } : task
        ),
      };
    case todoTypes.DeleteTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case todoTypes.ClearCompletedTasks:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.done),
      };
    case todoTypes.SwitchView:
      return {
        ...state,
        view: payload,
      };
    default:
      return state;
  }
};
