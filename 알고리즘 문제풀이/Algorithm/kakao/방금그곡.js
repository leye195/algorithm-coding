/*
1.방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
2.네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
3.각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
4.음악이 00:00를 넘겨서까지 재생되는 일은 없다.
5.조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
6.조건이 일치하는 음악이 없을 때에는 `(None)`을 반환한다.
*/
function getTime(st, en) {
  //사용 minutes 리턴
  const t1 = st.split(":"),
    t2 = en.split(":");
  const h1 = parseInt(t1[0]) * 60,
    m1 = parseInt(t1[1]),
    h2 = parseInt(t2[0]) * 60,
    m2 = parseInt(t2[1]);
  return h2 + m2 - (h1 + m1);
}
function changeFormat(m) {
  // #을 포함하는 음을 소문자로 변환해 return
  let r = [];
  for (let i = 0; i < m.length; i++) {
    if (m[i] === "#") {
      r.push(r.pop().toLowerCase());
    } else {
      r.push(m[i]);
    }
  }
  return r.join("");
}
function solution(m, musicinfos) {
  let answer = [],
    r = changeFormat(m);
  for (let i = 0; i < musicinfos.length; i++) {
    const [st, en, title, music] = musicinfos[i].split(",");
    const time = getTime(st, en),
      newMusic = changeFormat(music);
    let tmp = "";
    if (time > newMusic.length) {
      for (let j = 0; j < Math.floor(time / newMusic.length); j++) {
        tmp += newMusic;
      }
      tmp += newMusic.slice(0, time % newMusic.length);
    } else if (time < newMusic.length)
      tmp += newMusic.slice(0, time % newMusic.length);
    else tmp = newMusic;
    if (tmp.includes(r)) {
      //기억한 리듬이 재생된 멜로디에 포함되어 있을 경우
      answer.push({ idx: answer.length, time, title });
    }
  }
  if (answer.length === 0)
    //일치하는 음악이 없을 때
    return "(None)";
  answer.sort((x, y) => {
    if (x.time === y.time) {
      return x.idx - y.idx;
    }
    return y.time - x.time;
  });
  return answer[0].title;
}
