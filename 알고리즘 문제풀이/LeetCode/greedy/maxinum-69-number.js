/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number1 = function (num) {
  let ans = num;
  const numbers = String(num).split("");

  for (let i = 0; i < numbers.length; i++) {
    const tmp = [...numbers];
    if (tmp[i] === "9") tmp[i] = "6";
    else tmp[i] = "9";
    ans = Math.max(ans, +tmp.join(""));
  }
  return ans;
};

var maximum69Number2 = function (num) {
  let ans = num;
  let numbers = [];

  while (num > 0) {
    numbers.unshift(num % 10);
    num = parseInt(num / 10);
  }

  for (let i = 0; i < numbers.length; i++) {
    const tmp = [...numbers];
    if (tmp[i] === 9) tmp[i] = 6;
    else tmp[i] = 9;
    ans = Math.max(ans, +tmp.join(""));
  }

  return ans;
};
