/**
 * https://leetcode.com/problems/combination-sum/submissions/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const ans = [];

  const backtrack = (arr, total, idx) => {
    if (total > target) return;

    if (total === target) {
      ans.push(arr);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      const num = candidates[i];
      backtrack([...arr, num], total + num, i);
    }
  };

  for (let i = 0; i < candidates.length; i++) {
    const num = candidates[i];
    backtrack([num], num, i);
  }
  return ans;
};
