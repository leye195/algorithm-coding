const solution = (arr, m) => {
  let lo = 0;
  let hi = Math.max(...arr);

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i] > mid ? arr[i] - mid : 0;
    }

    if (total <= m) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};

console.log(solution([19, 14, 10, 17], 6));
