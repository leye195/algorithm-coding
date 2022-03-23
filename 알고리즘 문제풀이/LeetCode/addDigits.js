/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  let ans = 0;

  while (num) {
    const tmp = num % 10;
    ans += tmp;
    num = Math.floor(num / 10);

    if (num === 0 && ans > 9) {
      num = ans;
      ans = 0;
    }
  }

  return ans;
};
