const solution = (a, b, k) => {
  a.sort((x, y) => x - y);
  b.sort((x, y) => y - x);

  for (let i = 0; i < k; i++) {
    if (b[i] > a[i]) {
      const tmp = a[i];
      a[i] = b[i];
      b[i] = tmp;
    } else {
      break;
    }
  }

  return a.reduce((acc, num) => acc + num, 0);
};
