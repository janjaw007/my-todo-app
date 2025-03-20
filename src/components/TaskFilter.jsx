function TaskFilter({ setIsAddTask, setFilterStatus }) {
  function handleAddTask() {
    setIsAddTask((state) => !state);
  }

  return (
    <div className="list-head">
      <button className="btn-add" onClick={handleAddTask}>
        Add Task
      </button>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="null">All</option>
        <option value="true">Done</option>
        <option value="false">Undone</option>
      </select>
    </div>
  );
}

export default TaskFilter;
