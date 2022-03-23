# 이진탐색(Bineary Search)

- 정렬되어 있는 리스트에서 탐색 범위를 반으로 좁혀가며 데이터를 탐색
- 시작점과 끝점, 중간점을 이용해 탐색 범위 좁힘

```
const binearySearch = (arr,target) => {
    let lo = 0;
    let hi = arr.length - 1;

    while(lo<=hi) {
        const mid = Math.floot((min+max)/2);

        if(arr[mid] > target) {
            hi = mid - 1;
        } else if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

```

## lower bound, upper bound

중복된 자료가 있을 때 유용하게 탐색 할 수 있는 알고리즘

### lower bound

데이터내 특정 K 값보다 같거나 큰 값이 처음 나오는 위치를 리턴

### upper bound

데이터내 특정 K 값보다 처음으로 큰 값이 나오는 위치를 리턴

```
[1,2,2,3,3,3,4,6,7]

1 2 2 | 3 3 3 | 4 6 7

lower bound: 3  (index)
upper bound: 6  (index)


const lowerBound = (arr,target) => {
    let lo = 0;
    let hi = arr.length;

    while(lo<hi) {
        const mid = Math.floor((lo+hi)/2);

        if(target <= arr[mid]) hi = mid; // 처음으로 나오는 값을 찾기 위해 범위를 좁히며 탐색
        else lo = mid+1;
    }
    return lo;
}

const upperBound = (arr,target) => {
    let lo = 0;
    let hi = arr.length;

    while(lo<hi) {
        const mid = Math.floor((lo+hi)/2);

        if(target >= arr[mid]) lo = mid+1;
        else hi = mid; // 범위를 좁히며 탐색
    }
    return lo;
}

```

## 파라메트릭 서리(Parametric Search)

최적화 문제를 결정 문제로 바꾸어 해결하는 기법

- 특정 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제
