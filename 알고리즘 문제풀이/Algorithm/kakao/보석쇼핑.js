function solution(gems) {
  let answer = [],
    gemCount = new Set(gems).size,
    g = new Map();
  gems.forEach((gem, i) => {
    g.delete(gem);
    g.set(gem, i);
    if (g.size === gemCount) {
      answer.push([g.values().next().value + 1, i + 1]);
    }
  });
  console.log(answer);
  return answer[0];
}
solution(["AAA", "AAA"]);
solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]); //1 5
solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]); //3 7
