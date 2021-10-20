# Binary Search

이진 탐색은 탐색시간을 O(n) ~ O(lgN) 으로 줄여준다. 하지만 막상 코드를 작성 할려고 하면 생각하기가 쉽지 않아 시간을 허비하는 경우가 많다.

시간을 허비하는 가장 흔한 이유는 다음과 같은 문제들 때문이다.

- loop를 끝내야 하는 조건을 `left < right` 를 사용해야되는것인가 아니면 `left <= right`를 사용해야 되는가?
- left와 right의 초기값을 무엇으로 설정해야 되는가?
- boundary를 어떻게 업데이트 할 것이며 left = mid, left = mid+1 그리고 right = mid, right = mid-1 중 어떤 것을 사용해서 업데이트를 해야 적절한 것일까?

이진탐색에 대해서 사람들이 가장 많이 오해하는 부분은 항상 간단하게 "정렬된 배열에서 특정 값을 찾는것" 이다
하지만 사실 더 복잡한 상황에서 사용 될 수 있다는 것을 깨달아야한다.

## 가장 흔한 이진 탐색 (Most Generalized Binary Search)

아래는 전형적인 이진탐색 코드 구조이다.

```
const binarySearch(arr) => {
    const condition(value){
        // code
    }

    let left = 0;
    let right = arr.length;
    while(left < right) {
        const mid = Math.floor((left+(right-left)/2);
        if(condition(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}
```

이 코드 구조는 대부분의 이진탐색 문제에 대해서 세 부분만 수정 하면 거의 도든 문제를 풀 수 있게된다.

- 경계 값 left, right의 초기값을 정확하게 설정해야된다. (Only one rule: set up the boundary to include all possible elements)
- return 값을 left로 할지 아니면 left-1로 할것인지 결정해야되는 경우? (while문이 종료된후, left는 조건을 만족하는 최소 값이 된다)
- condition 함수를 작성해야된다. (가장 어려운 부분이며 많은 연습이 필요하다)

### Basic

First Bad Version

```
You are a product manager and currently leading a team to develop a new product. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API bool isBadVersion(version) which will return whether version is bad.

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
```

```
const firstBadVersion = (n) => {
    let left = 1;
    let right = n;

    while(left < right) {
        const mid = Math.floor((left+(right - left)/2);
        if(isBadVersion(mid)) right = mid;
        else left = mid + 1;
    }

    return left;
}
```

Sqrt(x)

```
Implement int sqrt(int x). Compute and return the square root of x, where x is guaranteed to be a non-negative integer. Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Input: 4
Output: 2

Input: 8
Output: 2
```

해당 문제에서는 `k^2 <= x` 를 만족하는 최대 값 k를 구해야된다.
여기에서 최대 값 k는 `condition(k) === false` 를 만족하는 것이며 최소 값 k가 조건 `condition(k) === true` - 1을 만족하는 것과 같다

```
const sqrt = (x) => {
    let left = 0;
    let right = x;

    while(left < right) {
        const mid = left+Math.floor((right-left)/2);

        if(mid*mid <= x) left = mid+1;
        else right = mid;
    }
    return left<=1?left:left - 1;
}
```

Search Insert Position

```
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.

Input: [1,3,5,6], 5
Output: 2
Input: [1,3,5,6], 2
Output: 1
```

```
const searchInsert = (nums,target) => {
    let left = 0;
    let right = nums.length;

    while(left < right) {
        const mid = left + Math.floor((right-left)/2);

        if(nums[mid] >= target)  right = mid;
        else left = mid+1;
    }
    return left;
}
```

### Advanced

위의 문제들은 탐색을 해야될 배열을 제공해주고 있어 매우 쉽게 풀 수 있다.

하지만 많은 상황에서 이렇게 대놓고 알려주지는 않는다. 풀면서 이진트리를 사용해야되는것도 모르는 경우도 많아 다른 방법들 DFS, DP을 활용하여 풀어 시간을 허비하는 경우가 많다.

"언제 이진트리를 사용해야될까?" 라는 질문에 관해서, 만약 어떤 종류의 단조로움을 발견하게 된다면, 예를 들어 `if condition(k) === true` 인 경우 `condition(k+1) === true` 을 만족한다면 이진트리를 사용하는것을 고려 할 수 있게 된다.

Capacity To Ship Packages Within D Days

```
days. The i-th package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation:
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
```

```
const shipWithinDays = (weights,D) => {
    const isCanBeShipedInDays = (capacity) => {
      let day = 1;
      let total = 0;
      for(let i=0;i<weights.length;i++) {
          const weight = weights[i];
          if(total+weight <= capacity) total+=weight;
          else {
            total = weight;
            day++;
          }
      }
      return day <= D;
    }

    let left = Math.max(...weights);
    let right = weights.reduce((x,y)=>x+y,0);

    while(left < right) {
        const mid = left + Math.floor((right - left)/2);

        if(isCanBeShipedInDays(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}
```

Split Array Largest Sum

```
Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays. The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
```

```
const splitArray = (nums,m) => {
    const feasible = (val) => {
        let count = 1;
        let total = 0;
        for(let i=0;i<nums.length;i++) {
            const num = nums[i];
            if(total+num<=val) total+=num;
            else {
                total = num;
                count++;
            }
        }
        return count<=m;
    }
    let left = Math.max(...nums);
    let right = nums.reduce((x,y)=>x+y,0);

    while(left < right) {
        const mid = left+Math.floor((right-left)/2);

        if(feasible(mid)) right = mid;
        else left = mid+1;
    }
    return left;
}
```

Koko Eating Bananas

```
Koko loves to eat bananas. There are N piles of bananas, the i-th pile has piles[i] bananas. The guards have gone and will come back in H hours. Koko can decide her bananas-per-hour eating speed of K. Each hour, she chooses some pile of bananas, and eats K bananas from that pile. If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back. Return the minimum integer K such that she can eat all the bananas within H hours.

Input: piles = [3,6,7,11], H = 8
Output: 4
Input: piles = [30,11,23,4,20], H = 5
Output: 30
Input: piles = [30,11,23,4,20], H = 6
Output: 23
```

```
const minEatingSpeed = (piles,H) => {
  const feasible = (speed) => {
    let total = 0;
    let h = 0;

    for(let i=0;i<piles.length;i++) {
      const pile = piles[i];
      total+= Math.ceil(pile/speed);
    }
    return total<H;
  }
  let left = 1;
  let right = Math.max(...piles);

  while(left < right) {
    const mid = left + Math.floor((right-left)/2);

    if(feasible(mid)) right = mid;
    else left = mid+1;
  }
  return left;
}
```

Minimum Number of Days to Make m Bouquets

```
Given an integer array bloomDay, an integer m and an integer k. We need to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden. The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet. Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
Output: 3
Explanation: Let's see what happened in the first three days. x means flower bloomed and _ means flower didn't bloom in the garden.
We need 3 bouquets each should contain 1 flower.
After day 1: [x, _, _, _, _]   // we can only make one bouquet.
After day 2: [x, _, _, _, x]   // we can only make two bouquets.
After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.


Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
Output: -1
Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.

```

```
const minDays = (bloomDay,m,k) => {
    const feasible = (day) => {
        let bouquets = 0;
        let flowers = 0;
        for(let i=0;i<bloomDay.length;i++) {
            const bloom = bloomDay[i];
            if(bloom<=day) {
                boquets+= Math.floor((flowers+1)/k);
                flowers = (flowers + 1)%k;
            } else {
                flowers = 0;
            }
        }
        return boquets >= m
    }

    if(bloomDay.length < m*k) return -1;
    let left = 1;
    let right = Math.max(...bloomDay);

    while(left < right) {
        const mid = left + Math.floor((right - left)/2);
        if(feasible(mid)) right = mid;
        else left = mid+1;
    }
    return left;
}
```

Kth Smallest Number in Multiplication Table

```
Nearly every one have used the Multiplication Table. But could you find out the k-th smallest number quickly from the multiplication table? Given the height m and the length n of a m * n Multiplication Table, and a positive integer k, you need to return the k-th smallest number in this table.

Input: m = 3, n = 3, k = 5
Output: 3
Explanation:
The Multiplication Table:
1	2	3
2	4	6
3	6	9

The 5-th smallest number is 3 (1, 2, 2, 3, 3).

```

```
const findKthNumber = (m,n,k) => {
    const enough = (num) => {
      let count = 0;

      for(let i=1;i<m+1;i++){
        let add = Math.min(Math.floor(num/i,n));
        if(!add) break;
        count+=add;
      }
      return count >= num;
    }

    let left = 1;
    let right = m*n;

    while(left < right) {
        const mid = left + Math.floor((right-left)/2);

        if(enough(mid)) right = mid;
        else left = mid+1;
    }
    return left;
}
```
