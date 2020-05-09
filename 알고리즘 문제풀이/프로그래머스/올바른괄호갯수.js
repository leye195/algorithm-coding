//재귀함수를 이용한 문제 풀이
// ( 의 갯수가 ) 의 갯수보다 무조건 크거나 같아야 올바른 괄호를 출력할수 있음
// "(".length >= ")".length
function getAns(n, le, ri, tmp) {
  let x = 0,
    y = 0;
  if (le === n && ri === n) return 1;
  if (le < n) x = getAns(n, le + 1, ri, tmp + "(");
  if (le > ri && ri < n) y = getAns(n, le, ri + 1, tmp + ")");
  return x + y;
}
function solution(n) {
  return getAns(n, 1, 0, "(");
}
