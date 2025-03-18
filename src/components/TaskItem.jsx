function TaskItem({ task }) {
  return (
    <il className="list-item" id={task.id}>
      <p>{task.text}</p>
      <button>edit</button>
      <button>delete</button>
    </il>
  );
}

export default TaskItem;
