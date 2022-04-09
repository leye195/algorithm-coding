/**
 * https://leetcode.com/problems/remove-k-digits
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const st = [];

  if (num.length === k) return "0";

  for (let i = 0; i < num.length; i++) {
    while (st.length && st[st.length - 1] > num[i] && k > 0) {
      st.pop();
      k--;
    }
    st.push(num[i]);
  }

  while (st.length && k > 0) {
    st.pop();
    k--;
  }

  while (st.length > 1 && st[0] === "0") {
    st.shift();
  }

  return st.join("");
};
