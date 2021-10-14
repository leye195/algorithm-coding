/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows1 = function (mat, k) {
  const ans = [];
  const m = mat.length;
  const n = mat[0].length;
  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (!mat[i][j]) break;
      count++;
    }
    ans.push({ row: i, count });
  }
  ans.sort((x, y) => x.count - y.count);

  return ans.slice(0, k).map((obj) => obj.row);
};

var kWeakestRows2 = function (mat, k) {
  return mat
    .map((e, i) => [i, e.reduce((x, y) => x + y, 0)])
    .sort((x, y) => (x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]))
    .map((x) => x[0])
    .slice(0, k);
};

var kWeakestRows3 = function (mat, k) {
  const search = (arr, left, right) => {
    if (left >= right) return left;
    const mid = Math.floor((left + right) / 2);
    return arr[mid] === 0
      ? search(arr, left, mid)
      : search(arr, mid + 1, right);
  };
  const n = mat[0].length;
  return mat
    .map((e, i) => [i, search(mat[i], 0, n)])
    .sort((x, y) => (x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]))
    .map((x) => x[0])
    .slice(0, k);
};
