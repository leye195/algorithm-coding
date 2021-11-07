/**
 * https://leetcode.com/problems/finding-the-users-active-minutes/
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const ans = new Array(k).fill(0);
  const mp = {};
  for (let i = 0; i < logs.length; i++) {
    const [id, time] = logs[i];
    if (!mp[id]) mp[id] = new Set([time]);
    else mp[id].add(time);
  }

  const obj = Object.values(mp);
  for (let i = 0; i < obj.length; i++) {
    ans[obj[i].size - 1] += 1;
  }
  return ans;
};
