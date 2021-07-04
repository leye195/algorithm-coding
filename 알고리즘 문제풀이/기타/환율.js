function solution(k, rates) {
  let dollars = 0;
  for (let i = 0; i < rates.length; i++) {
    if (dollars === 1) {
      if (i < rates.length - 1 && rates[i] > rates[i + 1]) {
        dollars -= 1;
        k += rates[i];
      } else if (i === rates.length - 1) {
        dollars -= 1;
        k += rates[i];
      }
    } else if (dollars === 0 && rates[i] <= k && rates[i] < rates[i + 1]) {
      dollars += 1;
      k -= rates[i];
    }
  }

  return k;
}
