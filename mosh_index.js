const express = require("express");
const app = express();

const courses = [];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses/:id", (req, res) => {
  res.send([1, 2, 3]);
});

// PORT
process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port 3000..."));
