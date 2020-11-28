import React, { useContext } from "react";
import { todo_SwitchView } from "../../../../../actions/todo";
import { AppContext } from "../../../../../AppContext/AppContext";
const names = ["All", "Active", "Completed"];
export const Nav = () => {
  const {
    todoState: { view },
    dispatch,
  } = useContext(AppContext);
  const handleSwitchView = (name) => () => dispatch(todo_SwitchView(name));
  return (
    <nav className="todo-options-nav wrapper max-width">
      <ul className="wrapper">
        {names.map((name, i) => (
          <li key={i}>
            <button
              onClick={handleSwitchView(name)}
              className={`${view === name ? "is-selected " : ""}`}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
