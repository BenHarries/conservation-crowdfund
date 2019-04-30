var express = require("express");
var router = express.Router();

let featured_causes = [
  {
    id: 1,
    species: "Turtle",
    image:
      "http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg",
    user_who_added: "Alex",
    scientific_name: "Chelonia mydas"
  },
  {
    id: 2,
    species: "Giraffe",
    image: "https://retrieverman.files.wordpress.com/2012/05/giraffe.jpg",
    user_who_added: "Steve",
    scientific_name: "Giraffa camelopardalis"
  },
  {
    id: 3,
    species: "Giant Panda",
    image:
      "https://c402277.ssl.cf1.rackcdn.com/photos/11551/images/hero_small/Bernard_de_wetter_wwf_canon_113974.jpg?1462218465",
    user_who_added: "David",
    scientific_name: "Ailuropoda melanoleuca"
  },
  {
    id: 4,
    species: "Pangolin",
    image: "https://mscbcmnsep.files.wordpress.com/2018/02/blog-5.jpg?w=1190",
    user_who_added: "Steve",
    scientific_name: "Manis culionensis"
  },
  {
    id: 5,
    species: "Crested Tit",
    image:
      "http://voice.gardenbird.co.uk/wp-content/uploads/2017/05/Crested-tit-Lophophanes-cristatus.jpg",
    user_who_added: "Jane",
    scientific_name: "Lophophanes cristatus"
  },
  {
    id: 6,
    species: "Tiger",
    image:
      "https://previews.123rf.com/images/ewastudio/ewastudio1803/ewastudio180300105/98369124-tiger-in-forest-tiger-portrait.jpg",
    user_who_added: "Steve",
    scientific_name: "Panthera tigris"
  },
  {
    id: 6,
    species: "Blue Whale",
    image:
      "https://rvalaska.co/wp-content/uploads/2016/02/humpback-whale-tour-alaska-cropped.jpg",
    user_who_added: "Lucy",
    scientific_name: "Balaenoptera musculus"
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

router.get("/desired/:featured_cause", function(req, res, next) {
  var id_of_item = req.params;
  console.log("letsss", id_of_item);

  var feature = featured_causes.filter(cause => {
    return (
      cause.species.toLowerCase() === id_of_item.featured_cause.toLowerCase()
    );
  });

  console.log(feature);

  res.json(feature);
});

router.post("/", function(req, res) {
  console.log("NEWFEATUREPOST", req.body);
  var token = req.body.token;
  console.log("UserToken", token);
  if (token === Admin_Token) {
    featured_causes.unshift(req.body);
  } else {
    res.status(403);
  }

  res.send("hello");
});

module.exports = router;
