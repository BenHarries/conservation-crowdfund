var express = require("express");
var router = express.Router();

let featured_causes = [
  {
    id: 1,
    species: "Turtle",
    image:
      "http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg"
  },
  {
    id: 2,
    species: "Giraffe",
    image: "https://retrieverman.files.wordpress.com/2012/05/giraffe.jpg"
  },
  {
    id: 3,
    species: "Mongoose",
    image:
      "https://www.marwell.org.uk/media/images/full/yellow_mongoose_shutterstock_296510669.jpg"
  }
];

let Admin_Token = "sjkdfnkjasbssdn";

router.get("/", function(req, res, next) {
  res.json(featured_causes);
});

// router.get("/:id", function(req, res) {
//   const featured_cause = featured_causes.find(
//     c => c.id === parseInt(req.params.id)
//   );
//   if (!featured_cause) res.status(404).send("The featured cause was not found");
//   res.send(featured_cause);
// });

router.post("/", function(req, res) {
  // var feature;
  // feature.id = req.body.id;
  // feature.species = req.body.species;
  // feature.image = req.body.image;
  console.log("NEWFEATUREPOST", req.body);
  var token = req.body.token;
  console.log("UserToken", token);
  if (token == Admin_Token) {
    featured_causes.unshift(req.body);
  } else {
    res.status(403);
  }

  res.send("hello");
});

module.exports = router;
