function solution(N, number) {
  let s = [];
  for (let i = 0; i < 8; i++) s.push([]);
  for (let i = 0; i < 8; i++) {
    const tmp = parseInt(String(N).repeat(i + 1), 10);
    s[i].push(tmp);
  }
  for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (let x = 0; x < s[j].length; x++) {
        for (let y = 0; y < s[i - j - 1].length; y++) {
          if (s[i].indexOf(s[j][x] + s[i - j - 1][y]) === -1)
            s[i].push(s[j][x] + s[i - j - 1][y]);
          if (s[i].indexOf(s[j][x] * s[i - j - 1][y]) === -1)
            s[i].push(s[j][x] * s[i - j - 1][y]);
          if (s[i].indexOf(s[j][x] - s[i - j - 1][y]) === -1)
            s[i].push(s[j][x] - s[i - j - 1][y]);
          if (
            s[i - j - 1][y] !== 0 &&
            s[i].indexOf(parseInt(s[j][x] / s[i - j - 1][y]), 10) === -1
          )
            s[i].push(parseInt(s[j][x] / s[i - j - 1][y]), 10);
        }
      }
    }
  }
  for (let i = 0; i < 8; i++) if (s[i].indexOf(number) !== -1) return i + 1;
  return -1;
}
