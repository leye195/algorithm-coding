/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const primes = new Array(n + 1).fill(1);
  primes[0] = 0;
  primes[1] = 0;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (primes[i]) {
      for (let j = 2; i * j <= n; j++) {
        primes[i * j] = 0;
      }
    }
  }
  return primes.filter((num, idx) => num !== 0 && idx !== n).length;
};
