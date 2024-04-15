const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/myProduct", (req, res) => {
  res.render("myProduct");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
