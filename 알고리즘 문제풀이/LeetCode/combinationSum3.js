/**
 * https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const ans = [];
  const visited = new Array(10).fill(0);
  const backtrack = (arr, visited, total, num, cnt) => {
    if (total > n || cnt > k) {
      return;
    }

    if (cnt === k && total === n) {
      ans.push(arr);
      return;
    }

    for (let i = num; i < 10; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        backtrack([...arr, i], visited, total + i, i, cnt + 1);
        visited[i] = 0;
      }
    }
  };

  for (let i = 1; i < 10; i++) {
    visited[i] = 1;
    backtrack([i], visited, i, i, 1);
    visited[i] = 0;
  }

  return ans;
};
