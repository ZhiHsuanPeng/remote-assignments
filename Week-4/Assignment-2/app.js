const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/myProduct", (req, res) => {
  res.render();
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
