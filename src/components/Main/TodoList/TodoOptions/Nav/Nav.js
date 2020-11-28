import React from "react";

export const Nav = () => {
  return (
    <nav className="todo-options-nav wrapper max-width">
      <ul className="wrapper">
        <li>
          <button className="is-selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </nav>
  );
};
