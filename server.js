var express = require("express");
var mongojs = require("mongojs");

var app = express();

var databaseUrl = "zoo";
var collections = ["animals"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.get("/all", function(req, res) {
  db.animals.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
    // console.log("AAAAAAAAAAA" + found);
  });
});

app.listen(3000, function() {
  console.log("app is on 3000!");
});
