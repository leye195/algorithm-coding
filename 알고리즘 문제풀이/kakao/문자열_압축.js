function solution(s) {
  let answer = s.length;
  for (let i = 1; i < s.length / 2 + 1; i++) {
    let st = [],
      ss = s.slice(0),
      tmp = "";
    while (ss.length > 0) {
      if (st.length === 0) {
        //빈 스택인 경우
        st.push(ss.slice(0, i));
      } else {
        if (st[st.length - 1] === ss.slice(0, i)) {
          st.push(ss.slice(0, i));
        } else {
          const cnt = st.length,
            word = st[st.length - 1];
          if (cnt > 1) tmp += String(cnt);
          tmp += word;
          st = [ss.slice(0, i)];
        }
      }
      ss = ss.slice(i);
    }
    if (st.length > 0) {
      const cnt = st.length,
        word = st[st.length - 1];
      if (cnt > 1) tmp += String(cnt);
      tmp += word;
    }
    answer = Math.min(answer, tmp.length);
  }
  return answer;
}
