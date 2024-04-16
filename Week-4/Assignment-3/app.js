const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/home", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

//TODO:
app.post("/api/v1/users/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // 1.) Check if the email already exists
  const user = await db.getUserByEmail(email);

  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  }

  // 2.) Add user to the user table

  const newUser = await db.createUser(email, password);

  // 3.) Send some response
  res.status(200).json({ newUser: newUser });
});
app.get("api/v1/users/login", (req, res) => {});

app.listen(3000, () => {
  console.log("Listening...");
});
