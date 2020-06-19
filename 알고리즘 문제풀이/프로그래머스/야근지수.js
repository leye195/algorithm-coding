/*
 *
 *  정확성 통과 효율성 실패...
 *  max-heap을 구현해 사용하면 통과할거 같음
 */
function solution(n, works) {
  while (n > 0) {
    works.sort((x, y) => y - x);
    works[0]--;
    n--;
  }
  return works.filter((x) => x >= 0).reduce((x, y) => x + y * y, 0);
}
