import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDeleteTask, handleEditTask, handleDoneTask }) {
  return (
    <ul className="list-container">
      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleDoneTask={handleDoneTask}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
