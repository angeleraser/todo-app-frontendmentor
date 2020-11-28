import React, { useState } from "react";
import { iconCheck } from "../../../../../assets/svg/svg";

export const CompleteTaskBtn = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={`complete-task-btn-wrapper${isChecked ? " checked" : ""}`}>
      <button onClick={handleCheck} aria-label="Complete task button">
        {iconCheck}
      </button>
    </div>
  );
};
