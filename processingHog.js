var processingHog = {
  intensities: function(image) {
    var grey = image.grey({algorithm: "luma601"});
    return grey;
  },

  gradients: function(imagedata) {
    var intensities = this.intensities(imagedata);
    return this._gradients(intensities);
  },

  _gradients: function(intensities) {
    var height = intensities.height;
    var width = intensities.width;

    var gradX = new Array(height);
    var gradY = new Array(height);

    for (var y = 0; y < height; y++) {
      gradX[y] = new Array(width);
      gradY[y] = new Array(width);

      var maxValue = intensities.maxValue;

      for (var x = 0; x < width; x++) {
        var prevX = x == 0 ? 0 : intensities.getValueXY(x-1 , y, 1)/maxValue;
        var nextX = x == width - 1 ? 0 : intensities.getValueXY(x+1 , y, 1)/maxValue;
        var prevY = y == 0 ? 0 : intensities.getValueXY(x , y-1, 1)/maxValue;
        var nextY = y == height - 1 ? 0 : intensities.getValueXY(x , y+1, 1)/maxValue;

        // kernel [-1, 0, 1]
        gradX[y][x] = -prevX + nextX;
        gradY[y][x] = -prevY + nextY;
      }
    }

    return {
      x: gradX,
      y: gradY
    };
  },

  gradientVectors: function(image) {
    var intensities = this.intensities(image);
    return this._gradientVectors(intensities);
  },

  _gradientVectors: function(intensities) {
    var height = intensities.height;
    var width = intensities.width;

    var vectors = new Array(height);
    var maxValue = intensities.maxValue;

    for (var y = 0; y < height; y++) {
      vectors[y] = new Array(width);
      for (var x = 0; x < width; x++) {
        var prevX = x == 0 ? 0 : intensities.getValueXY(x-1 , y, 1)/maxValue;
        var nextX = x == width - 1 ? 0 : intensities.getValueXY(x+1 , y, 1)/maxValue;
        var prevY = y == 0 ? 0 : intensities.getValueXY(x , y-1, 1)/maxValue;
        var nextY = y == height - 1 ? 0 : intensities.getValueXY(x, y+1, 1)/maxValue;

        // kernel [-1, 0, 1]
        var gradX = -prevX + nextX;
        var gradY = -prevY + nextY;

        vectors[y][x] = {
          mag: Math.sqrt(Math.pow(gradX, 2) + Math.pow(gradY, 2)),
          orient: Math.atan2(gradY, gradX)
        }
      }
    }
    return vectors;
  }
}

module.exports = processingHog;
