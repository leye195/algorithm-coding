/**
 * https://leetcode.com/problems/fizz-buzz
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const ans = new Array(n);

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans[i - 1] = "FizzBuzz";
    } else if (i % 5 === 0) {
      ans[i - 1] = "Buzz";
    } else if (i % 3 === 0) {
      ans[i - 1] = "Fizz";
    } else {
      ans[i - 1] = i + "";
    }
  }

  return ans;
};
