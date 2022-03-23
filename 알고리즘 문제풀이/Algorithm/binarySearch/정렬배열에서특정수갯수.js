const solution = (arr, target) => {
  const lowerBound = (arr, value) => {
    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (arr[mid] >= value) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };

  const upperBound = (arr, value) => {
    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (arr[mid] <= value) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  };

  const result = upperBound(arr, target) - lowerBound(arr, target);

  return result > 0 ? result : -1;
};

console.log(solution([1, 1, 2, 2, 2, 2, 3], 2));
