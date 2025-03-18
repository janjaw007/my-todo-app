import { useState } from "react";

function AddTaskForm({ setTasks, setIsAddTask }) {
  const [taskName, setTaskName] = useState("");

  function handleAddTask(e) {
    e.preventDefault();

    if (!taskName.trim()) return;

    setTasks((tasks) => [
      ...tasks,
      {
        id: Date.now(),
        text: taskName,
        done: false,
      },
    ]);

    setTaskName("");
    setIsAddTask(false);
  }

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="taskName">task name</label>
      <input
        type="text"
        name="taskName"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTaskForm;
