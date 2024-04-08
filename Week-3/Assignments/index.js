const express = require("express");
const app = express();

const AddFromOne = (number) => {
  return ((1 + number) * number) / 2;
};

app.get("/", (req, res) => {
  res.send("Hello My Server!");
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

const server = app.listen(3000, () => {
  console.log("listening on port 3000...");
});
