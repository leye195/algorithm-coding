/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual1 = function (target, arr) {
  target.sort((x, y) => x - y);
  arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target[i]) return false;
  }
  return true;
};

var canBeEqual2 = function (target, arr) {
  const mp = {};
  for (let i = 0; i < target.length; i++) {
    if (!mp[target[i]]) mp[target[i]] = 1;
    else mp[target[i]] += 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!mp[arr[i]] || mp[arr[i]] < 0) return false;
    mp[arr[i]] -= 1;
  }
  return true;
};
