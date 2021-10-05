/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const coords = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const st = [[sr, sc]];
  const visited = [];
  const color = image[sr][sc];

  for (let i = 0; i < image.length; i++) {
    const tmp = [];
    for (let j = 0; j < image[0].length; j++) {
      tmp.push(0);
    }
    visited.push(tmp);
  }

  while (st.length) {
    const [x, y] = st.pop();
    visited[x][y] = 1;
    image[x][y] = newColor;
    for (let i = 0; i < 4; i++) {
      const tx = x + coords[i][0];
      const ty = y + coords[i][1];

      if (
        tx >= 0 &&
        ty >= 0 &&
        tx < image.length &&
        ty < image[0].length &&
        !visited[tx][ty] &&
        image[tx][ty] === color
      ) {
        visited[tx][ty] = 1;
        st.push([tx, ty]);
      }
    }
  }
  return image;
};
