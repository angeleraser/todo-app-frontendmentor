import { todoReducer, todo_initialState } from "../reducers/todoReducer";
const { createContext, useReducer, useEffect } = require("react");
const tasksFromLocalStorage = () => {
  return (
    JSON.parse(
      localStorage.getItem("todoState") || JSON.stringify(todo_initialState)
    ) || todo_initialState
  );
};
export const AppContext = createContext();
export const TodoAppContext = ({ children }) => {
  const [todoState, dispatch] = useReducer(
    todoReducer,
    todo_initialState,
    tasksFromLocalStorage
  );

  const providerValue = {
    todoState,
    dispatch,
  };

  useEffect(() => {
    localStorage.setItem("todoState", JSON.stringify(todoState));
  }, [todoState]);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
