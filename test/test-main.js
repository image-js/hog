var {default: Image} = require('image-js');
var hog = require("../src");

var file = __dirname + "/beachball.jpg";

Image.load(file).then(function(image){
  var descriptor = hog.extractHOG(image);
  console.log(descriptor);
});

