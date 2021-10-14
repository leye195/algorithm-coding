/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return left;
};
/*
[0,1,0]
[0,2,1,0]
[0,10,5,2]
[3,4,5,1]
[24,69,100,99,79,78,67,36,26,19]
*/
