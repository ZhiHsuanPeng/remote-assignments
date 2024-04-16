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
  res.status(200).json({ newUser: newUser, message: "Sign up successfully!" });
});

app.post("/api/v1/users/login", async (req, res) => {
  const { email, password } = req.body;

  // 1.) Get user by the email and password provided by the user and check if the pair exists
  const user = await db.getUserByEmailandPassword(email, password);
  if (!user) {
    return res
      .status(400)
      .json({ message: "Wrong email or password! Please try again" });
  }

  // 2.) Send response
  res.status(200).json({ message: "Log in successfully!" });
});

app.listen(3000, () => {
  console.log("Listening...");
});
