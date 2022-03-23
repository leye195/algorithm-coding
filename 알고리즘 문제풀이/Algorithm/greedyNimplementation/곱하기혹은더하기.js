const solution = (s) => {
  let result = +s[0];
  let idx = 1;

  while (idx < s.length) {
    const num = +s[idx++];
    if (result < 2 || num < 2) result += num;
    else result *= num;
  }

  console.log(result);
};

solution("012454");
