const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app/public')));

app.use(require("./app/routing/htmlRoutes.js"));
app.use(require("./app/routing/apiRoutes.js"));

app.listen(8080, function(){
  console.log("Listening");
});