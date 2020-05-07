/**이분탐색을 활용힌 상한액 찾기 **/
function solution(budgets, M) {
  let total = 0;
  for (let i = 0; i < budgets.length; i++) total += budgets[i];
  if (total <= M) return Math.max(...budgets);
  let lo = 0,
    hi = Math.max(...budgets);
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2),
      total = 0;
    for (let i = 0; i < budgets.length; i++) {
      if (budgets[i] >= mid) total += mid;
      else total += budgets[i];
    }
    if (total > M) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return hi;
}
