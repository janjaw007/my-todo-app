import { useEffect, useState } from "react";

import Header from "./components/Header";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  //initial tasks
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [isAddTask, setIsAddTask] = useState(false);
  const [filterTasks, setFilterTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState(null);

  function handleAddTask(e) {
    e.preventDefault();

    // if empty nothing to add
    if (!taskName.trim()) return;

    setTasks((tasks) =>
      editTaskId
        ? tasks.map((task) =>
            task.id === editTaskId ? { ...task, text: taskName } : task
          )
        : [...tasks, { id: Date.now(), text: taskName, done: false }]
    );

    setTaskName("");
    setEditTaskId(null); // Reset after editing
    setIsAddTask((state) => !state);
  }

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

  function handleDoneTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  useEffect(
    function () {
      switch (filterStatus) {
        case "true":
          setFilterTasks(tasks.filter((task) => task.done === true));
          break;
        case "false":
          setFilterTasks(tasks.filter((task) => task.done === false));
          break;
        default:
          setFilterTasks(tasks);
          break;
      }
    },
    [filterStatus, tasks]
  );

  return (
    <div className="App">
      <Header />
      <TaskFilter
        setIsAddTask={setIsAddTask}
        setFilterStatus={setFilterStatus}
      />
      {isAddTask && (
        <AddTaskForm
          handleAddTask={handleAddTask}
          taskName={taskName}
          setTaskName={setTaskName}
        />
      )}

      <TaskList
        tasks={filterTasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        handleDoneTask={handleDoneTask}
      />
    </div>
  );
}

export default App;
