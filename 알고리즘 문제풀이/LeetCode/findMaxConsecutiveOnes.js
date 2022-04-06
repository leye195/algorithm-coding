/**
 * https://leetcode.com/problems/max-consecutive-ones
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes1 = function (nums) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      let cnt = 0;
      for (let j = i; j < nums.length; j++) {
        if (nums[j] === 0) break;
        cnt++;
      }
      ans = Math.max(ans, cnt);
    }
  }
  return ans;
};

const findMaxConsecutiveOnes = function (nums) {
  let ans = 0;
  let st = 0;
  let en = 0;

  while (en <= nums.length && st <= en) {
    if (nums[en]) {
      en++;
    } else {
      ans = Math.max(ans, en - st);
      en++;
      st = en;
    }
  }
  return ans;
};
