const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const frontend_dir = "/home/runner/FirstExpress/frontend/pages/";
const frontend_script = "/home/runner/FirstExpress/frontend/scripts/";

router.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"];
  console.dir(req.headers, {color: true});
  res.sendFile(frontend_dir + "index.html");
});

router.get("/login", (req, res) => {
  res.sendFile(frontend_dir + "login.html");
});

router.get("/scripts/login", (req, res) => {
  //console.log("script file : "+frontend_script);
  res.sendFile(frontend_script + "login.js");
});

module.exports = router;