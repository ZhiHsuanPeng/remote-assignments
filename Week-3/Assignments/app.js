const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const addFromOne = (number) => {
  return ((1 + number) * number) / 2;
};

// Assignment 1
app.get("/", (req, res) => {
  res.send("<h1>Hello My Server!</h1>");
});

// Assignment 2
app.get("/data", (req, res) => {
  const queryString = req.query;

  if (Object.keys(queryString).length === 0) {
    return res.status(400).json({ result: "Lack of Parameter!" });
  } else if (/[^0-9]/.test(queryString.number)) {
    return res
      .status(400)
      .json({ result: "Wrong Parameter! Please Type In A Number" });
  }

  const result = addFromOne(queryString.number * 1);
  res.status(200).json({ data: result });
});

// Assignment 4
app.get("/myName", (req, res) => {
  if (req.cookies && req.cookies.name) {
    res.send(`Hello! ${req.cookies.name}`);
  } else {
    const form = `<form action='/trackName' method="get">
      <label>
        Enter Your Name
        <input type="text" name="name"/>
        <button type="submit">Submit</button>
      </label>
    </form>`;
    res.send(form);
  }
});

app.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.redirect("/myName");
});

// Practicing Global Error Handling
app.all("*", (req, res, next) => {
  next(new Error(`Cannot find ${req.originalUrl} on this server!`));
});

app.use((err, req, res, next) => {
  const message = err.message;
  res.send(message);
});

const server = app.listen(3000, () => {
  console.log("listening on port 3000...");
});
