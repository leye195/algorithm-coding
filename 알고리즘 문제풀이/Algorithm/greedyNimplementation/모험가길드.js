const solution = (n, arr) => {
  arr.sort((x, y) => x - y);

  let result = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    count++;

    if (count >= arr[i]) {
      result++;
      count = 0;
    }
  }

  console.log(result);
};

solution(5, [2, 3, 4, 2, 2]);
