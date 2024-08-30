import { useContext } from "react";
import { TasckContext } from "../context/TaskContext";
export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TasckContext);

  return (
    <div className="bg-gray-400 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize text-blue-600">
        {task.title}
      </h1>
      <p className="text-sm text-gray-800">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 mt-3 font-thin rounded-md
        hover:bg-red-400 "
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
