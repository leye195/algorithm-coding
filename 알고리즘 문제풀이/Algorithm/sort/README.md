# 정렬 알고리즘

- 데이터를 특정한 기준에 따라 순서대로 나열 하는 것
- 문제에 따라 적절한 정렬 알고리즘이 공식처럼 사용된다.

## 선택정렬

처리되지 않은 데이터 중 가장 작은 데이터를 선택하여 맨 앞의 데이터와 바꾸는것을 반복

N번 만큼 가장 작은 수를 찾아 맨 앞으로 보내야 하기 때문에 전체 연산 횟수는 다음과 같이
(N^2+N+2)/2 로 표현 할 수 있어, O(N^2)으로 작성 하면 된다.

```
[7] 5 9 [0] 3 1 6 2 4 8  // i = 0
0 [5] 9 7 3 [1] 6 2 4 8  // i = 1
0 1 [9] 7 3 5 6 [2] 4 8 // i = 2
0 1 2 [7] [3] 5 6 9 4 8 // i = 3
0 1 2 3 [7] 5 6 9 [4] 8 // i = 4
0 1 2 3 4 [5] [6] 9 7 8 // i = 5
0 1 2 3 4 5 [6] 9 [7] 8 // i = 6
0 1 2 3 4 5 6 [9] [7] 8 // i = 7
0 1 2 3 4 5 6 7 [9] [8] // i = 8
0 1 2 3 4 5 6 7 8 9

const selectSort = (arr) => {
    let i = 0;

    while(i<arr.length-1) {
        const minIdx = arr.findIndex(Math.min(...arr.slice(i,)));

        if(arr[minIdx] < arr[i]) {
            const tmp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = arr[minIdx];
        }
        i++;
    }
}
```

## 삽입정렬

처리되지 않은 데이터를 하나씩 골라 적절한 위치에 삽입한다.

선택정렬 보다 더 효율적으로 동작한다.

앞 쪽에 있는 배열들은 정렬이 되어 있다고 판단하고, 뒤에 데이터들에 대해서 어떤 위치에 들어갈지 판단

시간복잡도는 O(N^2) 이며, 두 번 중첩된 반복문을 사용한다.

리스트가 거의 정렬이 되어 있는 경우 빠르게 동작한다 (최선 O(N))

```
7 | 5 9 0 3 1 6 2 4 8
5 7 | 9 0 3 1 6 2 4 8
5 7 9 | 0 3 1 6 2 4 8
0 5 7 9 | 3 1 6 2 4 8
0 3 5 7 9 | 1 6 2 4 8
0 1 3 5 7 9 | 6 2 4 8
0 1 3 5 6 7 9 | 2 4 8
0 1 2 3 5 6 7 9 | 4 8
0 1 2 3 4 5 6 7 9 | 8
0 1 2 3 4 5 6 7 8 9


const insertSort = (arr) => {
    for(let i=1;i<arr.length;i++) {
        for(let j=i;j>=0;j--) {
            if(arr[j]<arr[j-1]) {
                const tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            } else {
                break;
            }
        }
    }
}

```

## 퀵정렬

기준 데이터 (pivot)을 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법

일반적으로 가장 많이 사용되는 정렬 알고리즘 O(nlgN), 최악 O(N^2)

가장 기본적인 퀵 정렬은 첫번째 데이터를 기준 데이터(pivot)으로 설정한다.

왼쪽에서는 pivot 보다 큰 데이터를 선택, 오른쪽에서는 작은 데이터를 선택

위치가 엇갈리는 경우 'pivot' 과 '작은 데이터'의 위치를 서로 변경

```
[5] 4 9 0 3 1 6 2 7 8  // pivot = 5
[5] 4 2 0 3 1 6 9 7 8
|1 4 2 0 3 | 5 | 6 9 7 8| // divide(partition)

[1] 4 2 0 3 // pivot = 1
[1] 0 2 4 3

[6] 9 7 8 // pivot = 6


const qSort = (arr,st,en) => {
    if(st>=en) return;

    let pivot = st;
    let left = st + 1;
    let right = en;

    while(left <= right) {
        while(arr[left] <= arr[pivot]) left++;
        while(arr[right] >= arr[pivot]) right--;

        if(left <= right) {
            const tmp = arr[right];
            arr[right] = arr[left];
            arr[left] = tmp;
        } else {
            const tmp = arr[right];
            arr[right] = arr[pivot];
            arr[pivot] = tmp;
        }
    }
    qSort(arr,st,right-1);
    qSort(arr,right+1,en);
}

qsort(arr,0,arr.length-1);

```

## 계수 정렬

특정한 조건을 부합할 때만 사용할 수 있지만 매우 빠르게 동작하는 정렬 알고리즘

- 데이터 크기 범위가 제한되어 정수형태로 표현 할 수 있을 때 사용 가능
- 데이터 개수가 N, 데이터 중 최댓값이 K일 때 최약의 경우 O(N+K)를 보장
- 동일한 값을 가지는 데이터가 여러개 등장 할 때 매우 효과적으로 사용 할 수 있다.

```
[7,5,9,0,3,1,6,2,9,1,4,8,0,5,2]

[0,1,2,3,4,5,6,7,8,9] // count
[2,2,2,1,1,2,1,1,1,2]

=>[0,0,1,1,2,2,3,4,5,5,6,7,8,9,9] // sorted array

const countSort = (arr) => {
    const result = [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const count = {};
    for(let i=min;i<=max;i++) {
        count[i] = 0;
    }

    for(let i=0;i<arr.length;i++) {
        count[arr[i]]+=1;
    }

    for(let i=min;i<=max;i++) {
        for(let j=0;j<count[i];i++) {
            result.push(min);
        }
    }
}


```
