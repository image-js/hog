# HOG feature descriptor (Histogram of oriented gradients)

## Usage

### extractHOG(image[, options])

Generate a vector which corresponds to the HOG descriptor of an image [HOG feature descriptor](https://en.wikipedia.org/wiki/Histogram_of_oriented_gradients).  
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

See the file [test/test-hog.js](https://github.com/image-js/hog/test).

## License

[MIT](./LICENSE)

Inspired by [harthur implementation](https://github.com/harthur/hog-descriptor)
