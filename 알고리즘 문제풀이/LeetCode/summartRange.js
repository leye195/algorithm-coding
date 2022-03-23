/**
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  const ans = [];

  for (let st = 0; st < nums.length; st++) {
    let en = st;
    let i = st;
    while (nums[en] - nums[i] <= 1 && en < nums.length) {
      i = en;
      en++;
    }

    if (st !== i) {
      ans.push(`${nums[st]}->${nums[i]}`);
    } else {
      ans.push(`${nums[st]}`);
    }

    st = i;
  }
  return ans;
};
