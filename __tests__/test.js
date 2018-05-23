'use strict';

const path = require('path');

const { Image } = require('image-js');

const HOG = require('../src');

describe('hog size test', () => {
  it('Main test', async () => {
    const image = await Image.load(path.join(__dirname, 'beachball.png'));
    const sizeImage = 110; // image test1/png is square sizeImage*sizeImage
    const options = {
      cellSize: 4,
      bins: 6,
      blockSize: 2,
      blockStride: 1
    };
    const descriptorSize = HOG.extractHOG(image, options).length;
    const sizeExpected = (Math.floor((parseFloat(sizeImage) / options.cellSize - options.blockSize) / (options.blockSize - options.blockStride)) + 1) ** 2 * options.bins * options.cellSize;
    expect(descriptorSize).toEqual(sizeExpected);
  });
});
