let friends = [
  {
    "name": "Ahmed",
    "photo": "https://library.stanford.edu/sites/default/files/person/image/img_0017.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];
module.exports = {
  get: function(){
    return friends;
  },
  add: function(user){
    friends.push(user);
  }
}