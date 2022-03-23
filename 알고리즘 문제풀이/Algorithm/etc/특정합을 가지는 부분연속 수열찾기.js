const solution = (arr, m) => {
  let ans = 0;
  let total = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    while (total < m && j < arr.length) {
      total += arr[j++];
    }

    if (total === m) {
      ans++;
    }

    total -= arr[i];
  }
  return ans;
};
