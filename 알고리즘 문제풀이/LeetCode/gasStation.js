//https://leetcode.com/problems/gas-station/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  const result = [...gas];
  const length = gas.length;
  for (let i = 0; i < length; i++) {
    let next = (i + 1) % length;
    let cur = i;
    while (result[i] - cost[cur] >= 0) {
      result[i] = result[i] - cost[cur] + gas[next];
      if (i === next) return i;
      cur = next;
      next = (next + 1) % length;
    }
  }
  return -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
