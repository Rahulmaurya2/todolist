import React, { useEffect, useState } from "react";
import "./task.css";
import Task from "./Task";

const TaskApp = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const getLocalItems = () => {
    let list = localStorage.getItem("tasks");
    if (list) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };
  const [tasks, setTasks] = useState(getLocalItems);

  const toggleTask = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const editTask = (taskId, newTitle) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="task-list-container">
      <div className="task-input-container">
        <input
          type="text"
          placeholder="New Task..."
          className="task-input"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={addTask} className="add-task-button">
          Add Task
        </button>
      </div>
      {/* <div className="task-list-header"> </div> */}
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
