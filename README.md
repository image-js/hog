# HOG feature descriptor (Histogram of oriented gradients)

## Principe

The main feature of this repository will compute the [HOG descriptor](https://en.wikipedia.org/wiki/Histogram_of_oriented_gradients) of an image. The HOG descriptors are useful for image recognition and image detection. You can find a good tutorial about HOG descriptors [here](http://mccormickml.com/2013/05/09/hog-person-detector-tutorial/).


## Usage

### extractHOG(image[, options])

Generate a vector which corresponds to the HOG descriptor of an image.
Returns an array of float.

__arguments__

* `image` - an Image
* `options` - an optional object

__options__

* `cellSiwe`: length of cell in px (default: 4).
* `blockSize`: length of block in number of cells (default: 2).
* `blockStride`: number of cells to slide block window by (default: block-size / 2).
* `bins`: bins per histogram (default: 6).
* `norm`: norm block normalization method (default: "L2". Other possibilities : "L1" and "L1-sqrt").

## Example

```js
'use strict';

const {Image} = require('image-js');
const hog = require('hog-descriptor');

var file = __dirname + '/__test__/beachball.jpg';

Image.load(file).then(function (image) {
    var descriptor = hog.extractHOG(image);
    console.log(descriptor);
});
```

## License

[MIT](./LICENSE)

Inspired by [harthur implementation](https://github.com/harthur/hog-descriptor)
