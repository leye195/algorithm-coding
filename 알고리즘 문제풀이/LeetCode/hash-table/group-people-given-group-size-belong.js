/**
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const ans = [];
  const mp = {};
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    if (!mp[size]) mp[size] = [i];
    else mp[size].push(i);
  }

  const groups = Object.keys(mp);
  for (let i = 0; i < groups.length; i++) {
    const size = +groups[i];
    const tmp = [];
    for (let j = 0; j < mp[size].length; j += size) {
      tmp.push(mp[size].slice(j, j + size));
    }
    ans.push(tmp);
  }
  return ans.flat();
};
