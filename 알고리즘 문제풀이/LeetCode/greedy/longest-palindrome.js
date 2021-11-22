/**
 * https://leetcode.com/problems/longest-palindrome/submissions/
 * @param {string} s
 * @return {number}
 */
var longestPalindrome1 = function (s) {
  let ans = 0;
  const nums = {};
  for (let i = 0; i < s.length; i++) {
    if (!nums[s[i]]) nums[s[i]] = 1;
    else nums[s[i]] += 1;
  }
  Object.keys(nums).map((key) => {
    ans += Math.floor(nums[key] / 2) * 2;
    if (ans % 2 === 0 && nums[key] % 2 === 1) ans++;
  });
  return ans;
};

var longestPalindrome2 = function (s) {
  let ans = 0;
  const nums = new Set();
  for (let i = 0; i < s.length; i++) {
    if (nums.has(s[i])) {
      nums.delete(s[i]);
      ans += 2;
    } else nums.add(s[i]);
  }
  return nums.size > 0 ? ans + 1 : ans;
};

var longestPalindrome3 = function (s) {
  let ans = 0;
  const nums = {};

  for (let i = 0; i < s.length; i++) {
    if (!nums[s[i]]) nums[s[i]] = 1;
    else nums[s[i]] += 1;

    if (nums[s[i]] % 2 === 0) {
      nums[s[i]] = 0;
      ans += 2;
    }
  }
  return Object.values(nums).filter(num > 0).length > 0 ? ans + 1 : ans;
};
