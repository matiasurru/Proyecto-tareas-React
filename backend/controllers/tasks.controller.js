const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

const readTasks = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

exports.getTasks = (req, res) => {
  res.json(readTasks());
};

exports.createTask = (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter(t => t.id != req.params.id);
  saveTasks(tasks);
  res.sendStatus(204);
};

exports.toggleTask = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id == req.params.id);
  task.completed = !task.completed;
  saveTasks(tasks);
  res.json(task);
};
