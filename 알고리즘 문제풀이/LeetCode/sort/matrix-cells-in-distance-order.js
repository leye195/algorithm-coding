/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const coords = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === rCenter && j == cCenter) continue;
      coords.push([i, j]);
    }
  }

  return [
    [rCenter, cCenter],
    ...coords.sort((x, y) => {
      const d1 = Math.abs(rCenter - x[0]) + Math.abs(cCenter - x[1]);
      const d2 = Math.abs(rCenter - y[0]) + Math.abs(cCenter - y[1]);
      return d1 - d2;
    }),
  ];
};
