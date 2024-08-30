import { createContext } from "react";
import { tasks as data } from "../data/task";
import { useState, useEffect } from "react";

export const TasckContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TasckContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TasckContext.Provider>
  );
}
