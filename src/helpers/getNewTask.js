export const getNewTask = (name) => {
  const id = new Date().getTime();
  return {
    id,
    done: false,
    name,
  };
};
