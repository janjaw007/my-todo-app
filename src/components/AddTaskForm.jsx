function AddTaskForm({ handleAddTask, taskName, setTaskName }) {
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
