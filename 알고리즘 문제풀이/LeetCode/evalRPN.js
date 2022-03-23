/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const ops = ["+", "-", "*", "/"];
  const st = [];
  const len = tokens.length;

  for (let i = 0; i < len; i++) {
    const token = tokens[i];

    if (!ops.includes(token)) {
      st.push(+token);
    } else {
      const op = token;
      const n1 = st.pop();
      const n2 = st.pop();

      if (op === "+") {
        st.push(n2 + n1);
      } else if (op === "-") {
        st.push(n2 - n1);
      } else if (op === "/") {
        st.push((n2 / n1) | 0);
      } else {
        st.push(n2 * n1);
      }
    }
  }

  return st[0];
};
