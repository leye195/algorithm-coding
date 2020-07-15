//AxB,BxC => A*B*C
function solution(matrix_sizes) {
  let answer = 0,
    st = [matrix_sizes[0]],
    idx = 1;
  cnt = 0;
  while (cnt < matrix_sizes.length - 1) {
    if (st[st.length - 1][1] < matrix_sizes[idx][1]) {
      st.pop();
    }
    if (st.length > 1) {
      const arr1 = st.shift(),
        arr2 = st.shift();
      console.log(arr1, arr2);
      console.log(answer, arr1[0] * arr1[1] * arr2[1]);
      answer = answer + arr1[0] * arr1[1] * arr2[1];
      st.push([arr1[0], arr2[1]]);
      cnt++;
    } else {
      st.push(matrix_sizes[idx]);
    }
    idx = (idx + 1) % matrix_sizes.length;
  }
  return answer;
}
solution([
  [5, 3],
  [3, 10],
  [10, 6],
]);
