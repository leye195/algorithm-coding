/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit1 = function (s) {
  let ans = 0;
  let idx = 0;
  let count = 0;
  while (idx < s.length) {
    if (s[idx] === "R") count++;
    else if (s[idx] === "L") count--;
    if (count === 0) ans++;
    idx++;
  }
  return ans;
};

var balancedStringSplit2 = function (s) {
  let ans = 0;
  let idx = 0;
  const st = [];
  while (idx < s.length) {
    if (st.length === 0) st.push(s[idx]);
    else if (st.length > 0 && st[st.length - 1] === s[idx]) st.push(s[idx]);
    else if (st.length > 0 && st[st.length - 1] !== s[idx]) st.pop();

    if (st.length === 0) ans++;
    idx++;
  }
  return ans;
};
