const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

//TODO:
app.get("api/v1/users/signup", (req, res) => {});
app.get("api/v1/users/login", (req, res) => {});

app.listen(3000, () => {
  console.log("Listening...");
});
