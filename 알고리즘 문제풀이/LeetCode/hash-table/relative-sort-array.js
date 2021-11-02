/**
 * https://leetcode.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const ans = [];
  const mp = {};

  for (let i = 0; i < arr1.length; i++) {
    mp[arr1[i]] = mp[arr1[i]] ? mp[arr1[i]] + 1 : 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];
    while (mp[num]--) {
      ans.push(num);
    }
  }

  const remain = Object.entries(mp)
    .filter((n) => n[1] > 0)
    .sort((x, y) => +x[0] - +y[0]);

  for (let i = 0; i < remain.length; i++) {
    while (remain[i][1]--) ans.push(+remain[i][0]);
  }
  return ans;
};
