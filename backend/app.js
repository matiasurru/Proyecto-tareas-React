const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/tasks.routes"));

app.listen(3001, () => {
  console.log("Backend en http://localhost:3001");
});
