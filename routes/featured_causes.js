var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json([
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
    },
    {
      id: 4,
      species: "Turtle",
      image:
        "http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg"
    },
    {
      id: 5,
      species: "Giraffe",
      image: "https://retrieverman.files.wordpress.com/2012/05/giraffe.jpg"
    },
    {
      id: 6,
      species: "Mongoose",
      image:
        "https://www.marwell.org.uk/media/images/full/yellow_mongoose_shutterstock_296510669.jpg"
    },
    {
      id: 7,
      species: "Turtle",
      image:
        "http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg"
    },
    {
      id: 8,
      species: "Giraffe",
      image: "https://retrieverman.files.wordpress.com/2012/05/giraffe.jpg"
    },
    {
      id: 9,
      species: "Mongoose",
      image:
        "https://www.marwell.org.uk/media/images/full/yellow_mongoose_shutterstock_296510669.jpg"
    }
  ]);
});

module.exports = router;
