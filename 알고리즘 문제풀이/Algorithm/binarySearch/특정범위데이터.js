const solution = (arr, leftValue, rightValue) => {
  const lowerBound = (arr, target) => {
    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (arr[mid] >= target) hi = mid;
      else lo = mid + 1;
    }

    return lo;
  };

  const upperBound = (arr, target) => {
    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (arr[mid] <= target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  const leftIndex = lowerBound(arr, leftValue);
  const rightIndex = upperBound(arr, rightValue);

  return arr.slice(leftIndex, rightIndex);
};

console.log(solution([1, 2, 3, 3, 3, 3, 4, 4, 8, 9], 4, 4));
console.log(solution([1, 2, 3, 3, 3, 3, 4, 4, 8, 9], -1, 3));
