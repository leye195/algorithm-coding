/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let ans = 0;
  let remain = truckSize;
  let idx = 0;

  boxTypes.sort((box1, box2) => box2[1] - box1[1]);

  while (remain > 0 && idx < boxTypes.length) {
    const [boxNumber, boxUnit] = boxTypes[idx];
    if (remain - boxNumber >= 0) {
      ans += boxNumber * boxUnit;
      remain -= boxNumber;
    } else if (boxNumber >= remain) {
      ans += remain * boxUnit;
      break;
    }
    idx++;
  }
  return ans;
};
