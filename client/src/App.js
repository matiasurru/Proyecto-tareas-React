import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, deleteTask, toggleTask } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const addTask = async (text) => {
    const task = await createTask(text);
    setTasks([...tasks, task]);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggle = async (id) => {
    const updated = await toggleTask(id);
    setTasks(tasks.map(t => t.id === id ? updated : t));
  };

  return (
    <div>
      <h1>Gestor de Tareas</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={removeTask} onToggle={toggle} />
    </div>
  );
}

export default App;
