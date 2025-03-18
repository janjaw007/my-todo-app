import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDeleteTask }) {
  return (
    <ul className="list-container">
      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            handleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
