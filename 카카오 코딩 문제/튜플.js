const solution = (s) => {
  let answer = [],
    ss = s
      .slice(1, s.length - 1)
      .split(/(\},\{)/)
      .filter((v) => !v.includes("},{"))
      .map((v) => {
        if (v.includes("{")) {
          if (v.includes("}")) return v.slice(1, v.length - 1).split(",");
          return v.slice(1).split(",");
        } else if (v.includes("}")) return v.slice(0, v.length - 1).split(",");
        else return v.split(",");
      })
      .sort((x, y) => x.length - y.length);
  for (const i of ss) {
    for (const j of i) {
      if (!answer.includes(Number(j))) {
        answer.push(Number(j));
        break;
      } else {
        continue;
      }
    }
  }
  return answer;
};
solution("{{2,1},{2},{2,1,3},{2,1,3,4}}");
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
solution("{{20,111},{111}}");
solution("{{123}}");
solution("{{4,2,3},{3},{2,3,4,1},{2,3}}");
