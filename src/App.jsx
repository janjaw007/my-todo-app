import { useState } from "react";

import Header from "./components/Header";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  //initial tasks
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  // state to detect whether user is adding task
  const [isAddTask, setIsAddTask] = useState(false);

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(task) {
    console.log(task.text);

    //set id for edit task
    setEditTaskId(task.id);
    //set is AddTask on
    setIsAddTask((state) => !state);

    //display task current in field
    setTaskName(task.text);
    console.log(taskName);
  }

  return (
    <div className="App">
      <Header />
      <TaskFilter setIsAddTask={setIsAddTask} />
      {isAddTask && (
        <AddTaskForm
          taskName={taskName}
          setTaskName={setTaskName}
          setTasks={setTasks}
          setIsAddTask={setIsAddTask}
          editTaskId={editTaskId}
          setEditTaskId={setEditTaskId}
        />
      )}

      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
