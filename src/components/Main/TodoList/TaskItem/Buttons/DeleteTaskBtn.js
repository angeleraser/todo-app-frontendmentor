import React from "react";
import PropTypes from "prop-types";
export const DeleteTaskBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Delete task button"
      className="delete-task-btn">
      +
    </button>
  );
};

DeleteTaskBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

DeleteTaskBtn.defaultProps = {
  onClick() {},
};
