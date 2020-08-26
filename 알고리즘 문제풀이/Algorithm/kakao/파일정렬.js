function solution(files) {
  let answer = [],
    copyFiles = [];
  copyFiles = files
    .map((file, index) => {
      const tmp = file;
      let head = "",
        number = "",
        tail = "",
        w = "",
        idx = 0;
      //정규 표현식 사용 할 경우 더 쉽게 풀수 있음...
      //matched = file.match(/([^0-9]+)([0-9]+)(.*)/)
      //matched[1],matched[2],matched[3]
      for (let i = 0; i < tmp.length; i++) {
        //head
        if ((w + tmp[i]).search(/[0-9]/) !== -1) {
          head = w;
          idx = i;
          w = "";
          break;
        }
        w += tmp[i];
        idx = i;
      }
      if (head === "") {
        head = w;
        idx += 1;
        w = "";
      }
      for (let i = idx; i < tmp.length; i++) {
        if (tmp[i] >= "0" && tmp[i] <= "9") w += tmp[i];
        else {
          number = w;
          idx = i;
          break;
        }
        idx = i;
      }
      if (number === "") {
        number = w;
        idx += 1;
        w = "";
      }
      tail = tmp.slice(idx);
      return { head, number, tail, index };
    })
    .sort((x, y) => {
      return x.head.toLowerCase() > y.head.toLowerCase()
        ? 1
        : x.head.toLowerCase() < y.head.toLowerCase()
        ? -1
        : parseInt(x.number, 10) > parseInt(y.number, 10)
        ? 1
        : parseInt(x.number, 10) < parseInt(y.number, 10)
        ? -1
        : x.index > y.index
        ? 1
        : -1;
    });
  //head 기준으로 정렬, head부분이 같은 경우 number 순으로 정렬, number도 같을 경우 file이 들어온 index 순서대로 정렬 진행
  for (let i = 0; i < copyFiles.length; i++) {
    let s = `${copyFiles[i].head}${copyFiles[i].number}${copyFiles[i].tail}`;
    answer.push(s);
  }
  return answer;
}
solution(["foo9.txt", "foo010bar020.zip", "F-15", "F15", "Fwadaw"]);
