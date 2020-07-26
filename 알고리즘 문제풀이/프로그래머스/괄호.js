function backtrack(arr, current, left, right) {
  if (left === 0 && right === 0) {
    const tmp = [...current],
      s = [];
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === "(") {
        s.push("(");
      } else if (tmp[i] === ")") {
        if (s.length > 0) s.pop();
        else return;
      }
    }
    arr.push(current);
    return;
  }
  if (left > 0) backtrack(arr, current + "(", left - 1, right);
  if (right > 0) backtrack(arr, current + ")", left, right - 1);
  return;
}
function solution(n) {
  let answer = 0,
    arr = [];
  if (n === 1) return 1;
  if (n === 2) return 2;
  backtrack(arr, "(", n - 1, n);
  console.log(arr.length);
  return arr.length;
}
solution(14);
