import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDeleteTask, handleEditTask }) {
  return (
    <ul className="list-container">
      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
