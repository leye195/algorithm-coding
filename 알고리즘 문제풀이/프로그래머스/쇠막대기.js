/*
- 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있습니다.
- 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓습니다.
- 각 쇠막대기를 자르는 레이저는 적어도 하나 존재합니다.
- 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않습니다.

"()"을 *로 치환 진행 후 : "()(((()())(())()))(())" -> "*(((**)(*)*))(*)" 
for순환을 진행하면서 계산 진행
"("인 경우 0을 스택에 push   
"*"인 경우 스택 내부 모든 숫자 +1
")"인 경우 스택 pop을 한 값에 +1을 한 뒤 answer에 더해줌 

*/
function solution(arrangement) {
  let answer = 0,
    newArrangement = "",
    st = [];
  for (let i = 0; i < arrangement.length; i++) {
    if (
      i < arrangement.length - 1 &&
      arrangement[i] === "(" &&
      arrangement[i + 1] === ")"
    ) {
      newArrangement += "*";
      i = i + 1;
    } else {
      newArrangement += arrangement[i];
    }
  }
  for (let i = 0; i < newArrangement.length; i++) {
    if (st.length > 0 && newArrangement[i] === "*") {
      for (let i = 0; i < st.length; i++) st[i] += 1;
    } else if (newArrangement[i] === "(") {
      st.push(0);
    } else if (newArrangement[i] === ")") {
      answer += st.pop() + 1;
    }
  }
  return answer;
}
