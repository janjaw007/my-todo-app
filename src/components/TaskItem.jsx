function TaskItem({ task, handleDeleteTask }) {
  return (
    <il className="list-item" id={task.id}>
      <p>{task.text}</p>
      <button>edit</button>
      <button onClick={() => handleDeleteTask(task.id)}>delete</button>
    </il>
  );
}

export default TaskItem;
