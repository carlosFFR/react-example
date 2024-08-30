
import { useContext, useState } from "react";
import {TasckContext} from '../context/TaskContext'

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

 const {createTask} = useContext(TasckContext)



  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className=" w-max mx-auto">
      <form onSubmit={handleSubmit} className="  bg-neutral-400 flex justify-evenly  p-3 gap-3 items-center rounded-md">
      <h2 className="text-lg font-bold  text-nowrap ">AGREGAR TAREAS</h2>
      <input
      autoFocus
        type="text"
        placeholder="Escribe tu Nombre .. "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="rounded-md p-2 placeholder:text-sm h-10"
        />
      <textarea
        placeholder="Escribe ladeascripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="rounded-md p-2 placeholder:text-sm h-10 w-80 "
        value={description}
      ></textarea>
      <button className="bg-red-500 px-2 py-1 mt-3 font-thin rounded-md
        hover:bg-red-400 text-white ">Guardar</button>
    </form>
    </div>
  );
};

export default TaskForm;
