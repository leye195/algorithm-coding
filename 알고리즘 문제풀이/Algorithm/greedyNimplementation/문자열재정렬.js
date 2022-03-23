const solution = (s) => {
  let total = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    const w = s[i];
    if (
      (w.charCodeAt() >= 97 && w.charCodeAt() <= 122) ||
      (w.charCodeAt() >= 65 && w.charCodeAt() <= 90)
    ) {
      result.push(w);
    } else {
      total += +w;
    }
  }
  result.sort();
  return `${result.join("")}${total > 0 ? total : ""}`;
};

console.log(solution("K1KA5CB7"));
console.log(solution("AJKDLSI412K4JSJ9D"));
