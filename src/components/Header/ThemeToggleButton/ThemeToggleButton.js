import React, { useState } from "react";
import { iconMoon, iconSun } from "../../../assets/svg/svg";

export const ThemeToggleButton = () => {
  const [darkModeActive, setDarkModeActive] = useState(false);
  return (
    <button
      title="Toggle Theme"
      onClick={() => {
        document.getElementById("root").classList.toggle("dark-mode");
        setDarkModeActive(!darkModeActive);
      }}
      className="theme-toggle-button">
      {darkModeActive ? iconMoon : iconSun}
    </button>
  );
};
