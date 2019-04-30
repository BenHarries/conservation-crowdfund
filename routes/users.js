var express = require("express");
var router = express.Router();
var users = [
  {
    id: 1,
    username: "David",
    causes: ["Turtle"],
    profile_pic:
      "http://www.jakeblanchard.co.uk/Images/Archive/attenborough.jpg",
    password: "user",
    secret: "ksdjncaksjbciadcn"
  },
  {
    id: 2,
    username: "Steve",
    causes: ["Giant Panda"],
    profile_pic: "https://semantic-ui.com/images/avatar/large/joe.jpg",
    secret: "ksdjncaksjbciadcn",
    password: "user"
  },
  {
    id: 3,
    username: "Lucy",
    causes: ["Pangolin"],
    profile_pic: "https://semantic-ui.com/images/avatar2/large/rachel.png",
    secret: "ksdjncaksjbciadcn",
    password: "user"
  },
  {
    id: 4,
    username: "Jane",
    causes: ["Giraffe"],
    profile_pic: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    secret: "ksdjncaksjbciadcn",
    password: "user"
  },
  {
    id: 5,
    username: "Alex",
    causes: ["Mongoose"],
    profile_pic: "https://semantic-ui.com/images/avatar2/large/matthew.png",
    secret: "sjkdfnkjasbssdn",
    password: "admin"
  },
  {
    id: 6,
    username: "admin",
    causes: ["Mongoose"],
    profile_pic: "https://semantic-ui.com/images/avatar/large/steve.jpg",
    secret: "sjkdfnkjasbssdn",
    password: "admin"
  }
];
let Admin_Token = "sjkdfnkjasbssdn";

router.post("/login", function(req, res, next) {
  var id_of_item = req.body;
  console.log(id_of_item.username.toLowerCase());

  var user = users.filter(user => {
    return (
      (user.username.toLowerCase() === id_of_item.username.toLowerCase()) &
      (user.password === id_of_item.password)
    );
  });

  if (isEmpty(user)) {
    console.log("there is no user with this name");
    res.status(401);
    res.json({
      message: "Icorrect authentication, Try Again",
      error: "Incorrect authentication"
    });
    // Object is empty
  } else {
    console.log("there is a user with this name");
    res.json(user);
    res.status(200);
  }
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(users);
  res.status(200);
});

router.get("/:username", function(req, res, next) {
  var id_of_item = req.params;
  console.log(id_of_item.username);

  var user = users.filter(user => {
    return user.username.toLowerCase() === id_of_item.username.toLowerCase();
  });

  if (isEmpty(user)) {
    console.log("there is no user with this name");
    res.status(500); //should make there be a catch
    res.json({
      message: "No user with this name",
      error: "No user with this name"
    });
    // Object is empty
  } else {
    console.log("there is a user with this name");
    res.json(user);
    res.status(200);
    console.log("yeah nice one", res.headers);

    // Object is NOT empty
  }
  console.log(user);
});

router.post("/update_cause", function(req, res, next) {
  var update = req.body;
  var causes_appending_to = users.find(
    usr => usr.username.toLowerCase() === update.user.toLowerCase()
  ).causes;

  if (!arrayContains(update.cause_to_add, causes_appending_to)) {
    causes_appending_to.push(update.cause_to_add);
  }

  console.log(users);
  console.log("yes");
});

router.post("/new_user", function(req, res, next) {
  var update = req.body;
  var token = req.body.token;

  if (token === Admin_Token) {
    update.secret = "ksdjncaksjbciadcn";
    users.unshift(update);
    console.log("new user added", req.body);
    console.log("yes");
    res.status(200);
  } else {
    res.status(403);
  }
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
