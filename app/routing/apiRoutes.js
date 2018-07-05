var router = require("express").Router();
var data = require("../data/friends.js");
router.post("/api/survey", function(req, res){

  let list = data.get();
  let closestPerson = {};
  let reigningDiff = 9999;
  for(let i = 0; i < list.length; i++){
    let diff = 0;
    for (let j = 0; j < req.body.scores.length; j++) {
      diff += Math.abs(parseInt(list[i].scores[j])-parseInt(req.body.scores[j]));
    }
    if(diff < reigningDiff){
      closestPerson = list[i];
      reigningDiff = diff;
    }
  }
  data.add(req.body);
  console.log(req.body);
  res.send(closestPerson);
});
router.get("/api/list", function(req, res){
  res.send(data.get());
});
module.exports = router;