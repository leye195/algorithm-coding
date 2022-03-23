const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // 한 칸 씩 왼쪽으로 이동
        const tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      } else {
        // 작은 데이터를 만났을 경우 스톱
        break;
      }
    }
  }
  console.log(arr);
};

insertSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]);
