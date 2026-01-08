const API_URL = "http://localhost:3001/api/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (text) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const toggleTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "PUT" });
  return res.json();
};
