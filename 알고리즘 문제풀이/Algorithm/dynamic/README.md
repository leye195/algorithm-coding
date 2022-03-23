# Dynamic Programming (DP)

메모리을 적절히 사용하여 수행시간 효율성을 비약적으로 향상시키는 방법

- 이미 계산된 (작은문제)는 별도의 메모리 영역에 저장하여 다시 계산하지 않도록 한다.
- 일반적으로 2가지 방식 top-down, bottom-up으로 구성된다.

dp 사용 조건은 다음과 같다

- 큰 문제를 작은 문제로 나눌수 있다 (최적 부분 구조)
- 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 동일하다 (중복 부분 문제)

## top-down (하향식, memoization)

dp + 재귀함수를 활용하는 방식으로 큰문제 방문 후 작은 문제를 호출하여 답을 찾는 방식

- 점화식을 이해하기 쉽다

```
const fibonacci = (n) => {
  if(n===0) return 0;
  if(n===1) return 1;

  if(dp[n]!==-1) return dp[n];

  dp[n] = fibonacci(n-1) + fibonacci(n-2);
  return dp[n];
}
```

## bottom-up (상향식)

dp + 반복문을 활용하는 방식으로 가장 작은 문제들 부터 답을 구해가면 전체 문제의 답을 찾는 방식 (전형적)

- 함수를 재귀 호출하지 않기 때문에 시간과 메모리 사용량을 줄일 수 있다는 장점이 있다.

```
const fibonacci = (n) => {
  dp[0] = 0;
  dp[1] = 1;

  for(let i=2;i<=n;i++) {
      dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}
```
