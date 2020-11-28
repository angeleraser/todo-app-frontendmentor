export const getTasksByView = ({ arr, view }) => {
  switch (view) {
    case "Active":
      return arr.filter((task) => !task.done);
    case "Completed":
      return arr.filter((task) => task.done);
    default:
      return arr;
  }
};
