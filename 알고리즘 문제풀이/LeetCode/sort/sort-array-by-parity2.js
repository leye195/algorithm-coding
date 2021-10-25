/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const evens = nums.filter((num) => num % 2 === 0).sort((x, y) => x - y);
  const odds = nums.filter((num) => num % 2 !== 0).sort((x, y) => x - y);

  return nums.map((num, idx) => {
    if (idx % 2 !== 0) return odds[Math.floor(idx / 2)];
    else return evens[idx / 2];
  });
};
