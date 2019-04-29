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
    species: "Giant Panda",
    image:
      "https://c402277.ssl.cf1.rackcdn.com/photos/11551/images/hero_small/Bernard_de_wetter_wwf_canon_113974.jpg?1462218465"
  },
  {
    id: 4,
    species: "Pangolin",
    image: "https://mscbcmnsep.files.wordpress.com/2018/02/blog-5.jpg?w=1190"
  },
  {
    id: 5,
    species: "Crested Tit",
    image:
      "http://voice.gardenbird.co.uk/wp-content/uploads/2017/05/Crested-tit-Lophophanes-cristatus.jpg"
  },
  {
    id: 6,
    species: "Tiger",
    image: "https://cdn.britannica.com/s:300x500/71/174271-050-B90CC219.jpg"
  },
  {
    id: 6,
    species: "Blue Whale",
    image: "https://cdn.britannica.com/s:300x500/73/161673-050-7071CE8B.jpg"
  }
];

let Admin_Token = "sjkdfnkjasbssdn";

router.get("/", function(req, res, next) {
  res.json(featured_causes);
  res.status(200);
  // res.headers.set("Content-Type", "application/json");
  console.log("yeah nice one", res.headers);
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
