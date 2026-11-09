export const saveTasks = (tasks) => {
  localStorage.setItem(
    "focusflow_tasks",
    JSON.stringify(tasks)
  );
};

export const loadTasks = () => {
  const storedTasks =
    localStorage.getItem("focusflow_tasks");

  return storedTasks
    ? JSON.parse(storedTasks)
    : [];
};