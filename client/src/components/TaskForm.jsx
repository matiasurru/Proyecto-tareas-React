import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
