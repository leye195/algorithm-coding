const solution = (n) => {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        const time = `${i}${j}${k}`;
        if (time.includes("3")) count++;
      }
    }
  }
  console.log(n);
};

solution(5);
