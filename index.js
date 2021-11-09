const express = require("express");
const app = express();

// app.set("views", "./frontend/pages");
// app.set("view engine", "ejs");

const route = require("./backend/src/routes");
app.use("/", route);

app.listen(3000, () => {
  console.log("서버 실행");
});