/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const target = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] * 2 === target) return true;
    }
  }
  return false;
};

var checkIfExist2 = function (arr) {
  arr = arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length; i++) {
    const target = arr[i];
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (i !== mid && arr[mid] * 2 === target) return true;

      if (arr[mid] * 2 < target) lo = mid + 1;
      else hi = mid;
    }
  }
  return false;
};
