function solution(records) {
  let answer = [],
    msg = { Enter: "님이 들어오셨습니다.", Leave: "님이 나갔습니다." },
    userList = {};
  [].forEach.call(records, (record) => {
    const tmp = record.split(" ");
    if (tmp[0] === "Enter" || tmp[0] === "Change") {
      if (tmp[0] === "Enter") {
        answer.push(`${tmp[1]}${msg["Enter"]}`);
      }
      userList[tmp[1]] = tmp[2];
    } else if (tmp[0] === "Leave") {
      answer.push(`${tmp[1]}${msg["Leave"]}`);
    }
  });
  Object.keys(userList).forEach((id) => {
    for (let i = 0; i < answer.length; i++) {
      answer[i] = answer[i].replace(`${id}`, userList[id]);
    }
  });
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
