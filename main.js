function printSpiralRepr(matrix) {
  var spiralRepr = [];
  var center = (matrix.length + 1) / 2 - 1;

  var i = center;
  var j = center;

  var range = [center, center];

  spiralRepr.push(matrix[i][j]);

  while(i != 0 || j != 0) {
    range[0] = range[0] != 0 ? range[0] - 1 : 0;
    range[1] = range[1] != matrix.length ? range[1] + 1 : 0;

    for (var step = 0; step < 4; step++) {
      if (i == 0 && j == 0) {
        break;
      }

      switch (step) {
        case 0:
          while(j > range[0]) {
            spiralRepr.push(matrix[i][--j]);
          }
          break;
        case 1:
          while(i < range[1]) {
            spiralRepr.push(matrix[++i][j]);
          }
          break;
        case 2:
          while(j < range[1]) {
            spiralRepr.push(matrix[i][++j]);
          }
          break;
        case 3:
          while(i > range[0]) {
            spiralRepr.push(matrix[--i][j]);
          }
          break;
      }
    }
  }

  console.log(spiralRepr.join(' '));
}

printSpiralRepr([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
