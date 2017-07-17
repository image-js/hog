'use strict';

const {default: Image} = require('image-js');
const HOG = require('../src');

describe('hog size test', () => {
    it('Main test', async () => {
        const promises = [Image.load(__dirname + '/beachball.jpg')];
        const sizeImage = 110; // image test1/png is square sizeImage*sizeImage
        const images = await Promise.all(promises);
        const options = {
            cellSize: 4,
            bins: 6,
            blockSize: 2,
            blockStride: 1
        };
        const descriptorSize = HOG.extractHOG(images[0], options).length;
        const sizeExpected = (Math.floor((parseFloat(sizeImage) / options.cellSize - options.blockSize) / (options.blockSize - options.blockStride)) + 1) ** 2 * options.bins * options.cellSize;
        expect(descriptorSize).toEqual(sizeExpected);
    });
});
