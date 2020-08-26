const solution = (p) => {
  let answer = "";
  if (p.length === 0) return "";
  const check = (w) => {
    let u = "",
      v = "",
      tmp = "",
      st = [],
      le = 0,
      ri = 0;
    if (w.length > 0) {
      for (let i = 0; i < w.length; i++) {
        if (w[i] === "(") le += 1;
        else if (w[i] === ")") ri += 1;
        if (le === ri) {
          u = w.slice(0, i + 1);
          v = w.slice(i + 1, w.length);
          break;
        }
      }
      //u가 올바른 괄호인지 체크
      let flag = true;
      for (const v of u) {
        if (v === "(") st.push("(");
        else {
          if (st.length > 0) st.pop(")");
          else {
            flag = false;
            break;
          }
        }
      }
      if (flag === false) {
        //균형 잡힌 괄호인 경우
        return (
          "(" +
          check(v) +
          ")" +
          u
            .slice(1, u.length - 1)
            .split("")
            .map((item) => (item === ")" ? "(" : ")"))
            .join("")
        );
      } else {
        //올바른 괄호인 경우
        return u + check(v);
      }
    }
    return "";
  };
  answer = check(p);
  return answer;
};
solution("(()())()");
console.log("-----");
solution(")(");
console.log("-----");
solution("()))((()");
