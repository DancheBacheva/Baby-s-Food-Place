const express = require("express");
const db = require("./pkg/db/index");

const app = express();

db.init();

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Server can not start");
  } else console.log(`Server is running on port ${process.env.PORT}`);
});
