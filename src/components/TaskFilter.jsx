function TaskFilter({ setIsAddTask }) {
  function handleAddTask() {
    setIsAddTask((state) => !state);
  }

  return (
    <div className="list-head">
      <button className="btn-add" onClick={handleAddTask}>
        Add Task
      </button>
      <select name="" id="">
        <option value="All">All</option>
        <option value="done">done</option>
        <option value="undone">undone</option>
      </select>
    </div>
  );
}

export default TaskFilter;
