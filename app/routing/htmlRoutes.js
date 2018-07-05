var router = require("express").Router();
var path = require("path");
router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/html/home.html"));
});
router.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "../public/html/survey.html"));
});
module.exports = router;