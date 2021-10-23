/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduc1t = function (nums) {
  const length = nums.length;
  nums.sort((x, y) => x - y);
  return (nums[length - 1] - 1) * (nums[length - 2] - 1);
};

var maxProduct2 = function (nums) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const tmp = Math.max(nums[i], Math.min(num1, num2));
    num2 = Math.max(num1, num2);
    num1 = tmp;
  }
  return (num2 - 1) * (num1 - 1);
};
