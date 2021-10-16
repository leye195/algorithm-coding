/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap1 = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((acc, num) => acc + num, 0);
  const bobSum = bobSizes.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < aliceSizes.length; i++) {
    const target1 = aliceSizes[i];
    for (let j = 0; j < bobSizes.length; j++) {
      const target2 = bobSizes[j];

      if (aliceSum - target1 + target2 === bobSum - target2 + target1)
        return [target1, target2];
    }
  }
};

/* 
s1 + y - x = s2 + x - y
y = x + (s2 - s1) / 2

*/
var fairCandySwap2 = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((acc, num) => acc + num, 0);
  const bobSum = bobSizes.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < aliceSizes.length; i++) {
    const x = aliceSizes[i];
    const y = x + (bobSum - aliceSum) / 2;

    if (bobSum.includes(y)) return [x, y];
  }
};
