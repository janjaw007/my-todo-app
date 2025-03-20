function TaskItem({ task, handleDeleteTask, handleEditTask, handleDoneTask }) {
  return (
    <il className="list-item" id={task.id}>
      <p>
        {task.text} {task.done ? "done" : " "}
      </p>
      <button onClick={() => handleDoneTask(task.id)}>done</button>
      <button onClick={() => handleEditTask(task)}>edit</button>
      <button onClick={() => handleDeleteTask(task.id)}>delete</button>
    </il>
  );
}

export default TaskItem;
