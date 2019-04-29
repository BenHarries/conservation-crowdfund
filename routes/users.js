var express = require("express");
var router = express.Router();
var users = [
  {
    id: 1,
    username: "David",
    causes: ["Turtle"],
    profile_pic:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/16/1492536273-david-attenborough.jpg?crop=0.694xw:1.00xh;0.160xw,0&resize=480:*",
    secret: "ksdjncaksjbciadcn"
  },
  {
    id: 2,
    username: "Toby Harries",
    causes: ["Turtle"],
    profile_pic:
      "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/52283880_10205056588131613_653197111914921984_o.jpg?_nc_cat=107&_nc_ht=scontent-lhr3-1.xx&oh=b2f88aa6486ac8bd6c11541c46cabed9&oe=5D2DDD51",
    secret: "sjkdfnkjasbssdn"
  }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(users);
  res.status(200);
});

router.get("/:username", function(req, res, next) {
  var id_of_item = req.params;
  console.log(id_of_item.username);

  var user = users.filter(user => {
    return user.username === id_of_item.username;
  });

  if (isEmpty(user)) {
    console.log("there is no user with this name");
    res.status(400);
    res.json({
      message: "No user with this name",
      error: "No user with this name"
    });
    // Object is empty (Would return true in this example)
  } else {
    console.log("there is a user with this name");
    res.json(user);
    res.status(200);
    console.log("yeah nice one", res.headers);

    // Object is NOT empty
  }
  console.log(user);
});

router.post("/login", function(req, res, next) {
  var id_of_item = req.body;
  console.log(id_of_item.username);

  var user = users.filter(user => {
    return user.username === id_of_item.username;
  });

  if (isEmpty(user)) {
    console.log("there is no user with this name");
    res.status(400);
    res.json({
      message: "No user with this name",
      error: "No user with this name"
    });
    // Object is empty (Would return true in this example)
  } else {
    console.log("there is a user with this name");
    res.json(user);
    res.status(200);
  }
});

router.post("/update_cause", function(req, res, next) {
  var update = req.body;
  var causes_appending_to = users.find(usr => usr.username === update.user)
    .causes;

  if (!arrayContains(update.cause_to_add, causes_appending_to)) {
    causes_appending_to.push(update.cause_to_add);
  }

  console.log(users);
  console.log("yes");
});

router.post("/new_user", function(req, res, next) {
  var update = req.body;
  update.secret = "ksdjncaksjbciadcn";
  users.push(update);
  console.log("new user added", req.body);
  console.log("yes");
  res.status(200);
});

function arrayContains(needle, arrhaystack) {
  return arrhaystack.indexOf(needle) > -1;
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

module.exports = router;
