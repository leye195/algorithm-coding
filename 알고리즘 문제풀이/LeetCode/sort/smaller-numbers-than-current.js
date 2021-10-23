/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const tmp = [...nums].sort((x, y) => x - y);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let count = 0;
    let j = 0;
    while (num > tmp[j++]) count++;
    nums[i] = count;
  }
  return nums;
};
