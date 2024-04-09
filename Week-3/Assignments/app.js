const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const AddFromOne = (number) => {
  return ((1 + number) * number) / 2;
};

app.get("/", (req, res) => {
  res.send("<h1>Hello My Server!</h1>");
});

app.get("/data", (req, res) => {
  const queryString = req.query;

  if (Object.keys(queryString).length === 0) {
    res.status(400).end("Lack of Parameter!");
  } else if (/[^0-9]/.test(queryString.number)) {
    res.status(400).end("Wrong Parameter! Please Type In A Number");
  }

  const result = AddFromOne(queryString.number * 1);
  res.status(200).json({ result: result });
});

app.get("/myName", (req, res) => {
  if (req.cookies && req.cookies.name) {
    res.send(req.cookies.name);
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
const server = app.listen(3000, () => {
  console.log("listening on port 3000...");
});
