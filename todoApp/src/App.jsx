import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Filters from "./components/Filters";
import Progress from "./components/Progress";
import TaskCard from "./components/TaskCard";
import TaskDataProgress from "./components/TaskDataProgress";
import TaskList from "./components/TaskList";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SidebarItem";

const App = () => {
  let [taskFilter, setTaskFilter] = useState("all");
  let [progress, setProgress] = useState(0);
  let [tasks, setTasks] = useState([]);

  function addTask(description) {
    // spread operator
    if (description.length < 4) {
      alert("Task description should be at least 4 characters long");
      return;
    }
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        description: description,
        status: "pending",
        createdAt: new Date().toLocaleString(),
      },
    ]);
  }
  console.log(tasks);

  /// filter tasks
  const filterTasks = tasks.filter((task) => {
    const filterAllTasks =
      taskFilter === "all" ? true : task.status === taskFilter;
    return filterAllTasks;
  });
  //task data complete  progress
  useEffect(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => {
      return task.status === "completed";
    }).length;

    const progress = Math.round((completedTasks / totalTasks) * 100) || 0;
    setProgress(progress);
  }, [tasks]);
  // update task status

  function updateTaskStatus(id, status) {
    let currentTask = tasks.map((task) => {
      if (task.id === id) {
        task.status = status;
      }
      return task;
    });
    setTasks(currentTask);
  }

  // delete task

  function deleteTask(id) {
    let currentTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(currentTask);
  }
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <AddTask handleAddTask={addTask} />
      <Filters taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
      <Progress progress={progress} />
      <TaskList
        tasks={filterTasks}
        handleDeleteTask={deleteTask}
        handleUpdateTask={updateTaskStatus}
      />
      <TaskDataProgress progress={progress} />
    </div>
  );
};

export default App;
