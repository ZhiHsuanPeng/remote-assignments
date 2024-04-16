const express = require("express");
const path = require("path");
const authControllers = require("./controllers/authControllers");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// View rendering
app.get("/member", (req, res) => {
  res.send("<h1>Hello! Member!</h1>");
});
app.get("/home", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

// Signup and login api
app.post("/api/v1/users/signup", authControllers.signUp);
app.post("/api/v1/users/login", authControllers.login);

app.listen(3000, () => {
  console.log("Listening...");
});
