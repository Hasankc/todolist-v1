//jshint

const bodyParser = require("body-parser");
const express = require("express");

const app = express();
let items = ["Eat food", "Study English", "Go to Gym"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-us", options);

  res.render("list", { kindOfDay: day, newListItems: items});
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
