const qSort = (arr, start, end) => {
  if (start >= end) return; // 원소 한개 인 경우

  const pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (arr[left] >= arr[pivot]) left++; // pivot 보다 큰 값 탐색
    while (arr[right] <= arr[pivot]) right--; // pivot 보다 작은 값 탐색

    if (left <= right) {
      // 엇갈리지 않은 경우 큰 데이터와 작은 데이터 교체
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
    } else {
      // 엇갈린 경우 작은 데이터와 pivot 교체
      const tmp = arr[pivot];
      arr[pivot] = arr[right];
      arr[right] = tmp;
    }
  }
  // divide 하여 왼쪽, 오른쪽 각각 정렬
  qSort(arr, right + 1, end);
  qSort(arr, start, right - 1);
};

qSort([9, 5, 7, 1, 4, 8, 2], 0, 6);
