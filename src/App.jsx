import { useState } from "react";

import Header from "./components/Header";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  //initial tasks
  const [tasks, setTasks] = useState([]);

  // state to detect whether user is adding task
  const [isAddTask, setIsAddTask] = useState(false);

  console.log(tasks);

  return (
    <div className="App">
      <Header />

      <TaskFilter setIsAddTask={setIsAddTask} />
      {isAddTask && (
        <AddTaskForm setTasks={setTasks} setIsAddTask={setIsAddTask} />
      )}

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
