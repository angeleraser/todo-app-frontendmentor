import React from "react";
import PropTypes from "prop-types";
import { iconCheck } from "../../../../../assets/svg/svg";
export const CompleteTaskBtn = ({ done, onClick }) => {
  return (
    <div className={`complete-task-btn-wrapper${done ? " checked" : ""}`}>
      <button onClick={onClick} aria-label="Complete task button">
        {iconCheck}
      </button>
    </div>
  );
};

CompleteTaskBtn.propTypes = {
  done: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

CompleteTaskBtn.defaultProps = {
  done: false,
  onClick() {},
};
