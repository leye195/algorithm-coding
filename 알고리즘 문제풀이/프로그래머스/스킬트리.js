function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.map((tree) => {
    let mine = "",
      idx = 0;
    for (let i = 0; i < tree.length; i++) {
      if (skill.include(tree.charAt(i))) {
        if (skill.charAt(idx) === tree.charAt(i)) {
          mine += tree.charAt(i);
          idx += 1;
        } else {
          break;
        }
      } else {
        mine += tree.charAt(i);
      }
    }
    if (mine.length === tree.length) answer += 1;
  });
  return answer;
}
