function AddTaskForm({
  editTaskId,
  setTasks,
  setIsAddTask,
  taskName,
  setTaskName,
  setEditTaskId,
}) {
  function handleAddTask(e) {
    e.preventDefault();

    // if empty nothing to add
    if (!taskName.trim()) return;

    setTasks((tasks) =>
      editTaskId
        ? tasks.map((task) =>
            task.id === editTaskId ? { ...task, text: taskName } : task
          )
        : [...tasks, { id: Date.now(), text: taskName, done: false }]
    );

    setTaskName("");
    setEditTaskId(null); // Reset after editing
    setIsAddTask((state) => !state);
  }

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="taskName">task name</label>
      <input
        type="text"
        name="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTaskForm;
