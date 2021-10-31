/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numObj[nums[i]]) numObj[nums[i]] = 1;
    else numObj[nums[i]] += 1;
  }
  return Object.keys(numObj)
    .filter((num) => numObj[num] === 1)
    .reduce((x, num) => x + +num, 0);
};
