/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const expected = [...heights].sort((x, y) => x - y);
  return (
    heights.length -
    heights.reduce(
      (cur, x, idx) => (heights[idx] === expected[idx] ? cur + 1 : cur),
      0
    )
  );
};
