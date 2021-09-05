/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const checkInterleave = (s1, i, s2, j, res, s3) => {
    if (res === s3 && i === s1.length && j === s2.length) return true;
    let ans = false;
    if (i < s1.length)
      ans = ans || checkInterleave(s1, i + 1, s2, j, res + s1[i], s3);
    if (j < s2.length)
      ans = ans || checkInterleave(s1, i, s2, j + 1, res + s2[j], s3);

    return ans;
  };

  return checkInterleave(s1, 0, s2, 0, "", s3);
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
console.log(isInterleave("", "", ""));
console.log(isInterleave("", "", "a"));
console.log(isInterleave("a", "", "c"));
console.log(isInterleave("a", "", "a"));
console.log(isInterleave("aa", "ab", "aaba"));
