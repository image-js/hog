var {default: Image} = require('image-js');
var hog = require("./hog");

var file = __dirname + "/test/beachball.jpg";

Image.load(file).then(function(image){
  var descriptor = hog.extractHOG(image);
  console.log(descriptor);
});

