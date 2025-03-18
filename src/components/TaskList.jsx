import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ul className="list-container">
      {tasks.map((task) => {
        return <TaskItem task={task} key={task.id} />;
      })}
    </ul>
  );
}

export default TaskList;
