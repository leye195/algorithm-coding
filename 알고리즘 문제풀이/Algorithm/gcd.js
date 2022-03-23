const gcd1 = (a, b) => {
  if (a % b === 0) return b;
  return gcd1(b, a % b);
};

const gcd2 = (a, b) => {
  if (a <= b) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  while (a % b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  return b;
};

console.log(gcd1(192, 162));
console.log(gcd2(192, 162));
