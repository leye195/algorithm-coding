/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

// brute force 방식
const numSubarraysWithSum = function (nums, goal) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > goal) break;
      if (sum === goal) answer += 1;
    }
  }
  return answer;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
