/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const mp = {};
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    mp[nums[i]] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!mp[i]) ans.push(i);
  }
  return ans;
};
