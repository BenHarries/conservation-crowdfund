var express = require("express");
var router = express.Router();
users = [
  {
    id: 1,
    username: "Ben Harries",
    causes: "Turtle",
    profile_pic: "https://benharries.github.io/Images/headshot.png"
  }
  // {
  //   id: 2,
  //   username: "Toby Harries",
  //   causes: "Turtle",
  //   profile_pic:
  //     "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/52283880_10205056588131613_653197111914921984_o.jpg?_nc_cat=107&_nc_ht=scontent-lhr3-1.xx&oh=b2f88aa6486ac8bd6c11541c46cabed9&oe=5D2DDD51"
  // }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(users);
});
router.get("/:username", function(req, res, next) {
  var id_of_item = req.params;
  console.log(id_of_item.username);

  var user = users.filter(user => {
    return user.username == id_of_item.username;
  });

  if (isEmpty(user)) {
    console.log("there is no user with this name");
    res.status(err.status || 500);
    res.json({
      message: "No user with this name",
      error: "No user with this name"
    });
    // Object is empty (Would return true in this example)
  } else {
    console.log("there is a user with this name");
    res.json(user);
    res.status(200);

    // Object is NOT empty
  }
  console.log(user);
});

module.exports = router;

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
