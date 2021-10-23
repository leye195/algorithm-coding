/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity1 = function (nums) {
  return [
    ...nums.filter((num) => num % 2 === 0),
    ...nums.filter((num) => num % 2 !== 0),
  ];
};

var sortArrayByParity2 = function (nums) {
  const ans = new Array(nums.length).fill(0);
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) ans[idx++] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) ans[idx++] = nums[i];
  }

  return ans;
};
