const selectSort = (arr) => {
  let i = 0;

  while (i < arr.length) {
    const minIdx = arr.findIndex((n) => n === Math.min(...arr.slice(i)));

    if (arr[minIdx] < arr[i]) {
      const tmp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = tmp;
    }
    i++;
  }
  console.log(arr);
};

selectSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]);
