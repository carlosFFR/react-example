import { TasckContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import {useContext} from 'react'
function TaskList() {
  const {tasks} = useContext(TasckContext)
  if (tasks.length == 0) {
    return <h1 className="text-3xl uppercase mt-5 text-gray-300 text-center">no ay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
export default TaskList;
