import React from "react";
import { ThemeToggleButton } from "./ThemeToggleButton/ThemeToggleButton";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper max-width">
        <h1>TODO</h1>
        <ThemeToggleButton />
      </div>
    </header>
  );
};
