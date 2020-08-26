/*
캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
cache hit일 경우 실행시간은 1이다.
cache miss일 경우 실행시간은 5이다.
 */
function solution(cacheSize, cities) {
  let answer = 0,
    tmp = [];
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (tmp.indexOf(city) === -1) {
      if (tmp.length >= cacheSize) tmp.shift();
      if (cacheSize > 0) tmp.push(city);
      answer += 5;
    } else {
      const idx = tmp.indexOf(city);
      tmp = [tmp.slice(0, idx), tmp.slice(idx + 1), tmp[idx]];
      answer += 1;
    }
  }
  return answer;
}
