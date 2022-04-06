/**
 * https://leetcode.com/problems/relative-ranks/
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const mp = {};
  const tmp = [...score].sort((x, y) => y - x);

  for (let i = 0; i < tmp.length; i++) {
    const s = tmp[i];
    if (i === 0) {
      mp[s] = "Gold Medal";
    } else if (i === 1) {
      mp[s] = "Silver Medal";
    } else if (i === 2) {
      mp[s] = "Bronze Medal";
    } else {
      mp[s] = i + 1 + "";
    }
  }

  for (let i = 0; i < score.length; i++) {
    score[i] = mp[score[i]];
  }

  return score;
};
