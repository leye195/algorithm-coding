/**
 * https://leetcode.com/problems/integer-replacement/
 * @param {number} n
 * @return {number}
 */
const integerReplacement = function (n) {
  let ans = Infinity;

  const backtrack = (n, count) => {
    if (n === 1) {
      ans = Math.min(ans, count);
      return;
    }

    if (n % 2 === 0) backtrack(n / 2, count + 1);
    else {
      backtrack(n - 1, count + 1);
      backtrack(n + 1, count + 1);
    }
  };
  backtrack(n, 0);

  return ans;
};
