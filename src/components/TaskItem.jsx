function TaskItem({ task, handleDeleteTask, handleEditTask }) {
  return (
    <il className="list-item" id={task.id}>
      <p>{task.text}</p>
      <button onClick={() => handleEditTask(task)}>edit</button>
      <button onClick={() => handleDeleteTask(task.id)}>delete</button>
    </il>
  );
}

export default TaskItem;
