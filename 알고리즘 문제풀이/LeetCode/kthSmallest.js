/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
  const arr = [];
  const n = matrix.length;
  let x = 0;
  let y = 0;

  while (x < n && y < n) {
    arr.push(matrix[x][y]);
    y++;

    if (y >= n) {
      y = 0;
      x++;
    }
  }
  arr.sort((x, y) => x - y);
  return arr[k - 1];
};
