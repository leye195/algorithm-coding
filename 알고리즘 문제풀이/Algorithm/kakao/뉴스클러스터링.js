function getSet(s) {
  let ss = s,
    arr = [];
  while (ss.length > 0) {
    const word = ss.slice(0, 2);
    if (word.length < 2) break;
    if (word.search(/[a-z][a-z]/) !== -1) arr.push(word);
    ss = ss.slice(1);
  }
  return arr;
}
function interSection(a, b) {
  let result = 0;
  Object.keys(a).forEach((key) => {
    if (b[key] !== undefined) result += Math.min(a[key], b[key]);
    else result += a[key];
  });
  return result;
}
function union(a, b) {
  let result = 0,
    tmpA = a,
    tmpB = b;
  Object.keys(tmpB).forEach((key) => {
    if (tmpA[key] !== undefined) tmpA = Math.max(tmpA[key], tmpB[key]);
    else tmpA[key] = tmpB[key];
  });
  Object.keys(tmpA).forEach((key) => {
    result += tmpA[key];
  });
  return result;
}
function solution(str1, str2) {
  const a = getSet(str1),
    b = getSet(str2);
  if (a.lenght === 0 && b.length === 0) return 65536;
  else {
    const mi = interSection(a, b);
    ma = union(a, b);
    return parseInt((mi / ma) * 65536, 10);
  }
}
