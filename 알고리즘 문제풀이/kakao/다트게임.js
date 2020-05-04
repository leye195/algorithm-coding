function solution(dartResult) {
  let answer = 0,
    arr = [],
    number = "";
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      number = parseInt(number, 10);
      arr.push(number);
      number = "";
    } else if (dartResult[i] === "D") {
      number = parseInt(number, 10) * parseInt(number, 10);
      arr.push(number);
      number = "";
    } else if (dartResult[i] === "T") {
      number =
        parseInt(number, 10) * parseInt(number, 10) * parseInt(number, 10);
      arr.push(number);
      number = "";
    } else {
      if (dartResult[i] !== "*" && dartResult[i] !== "#") {
        number += dartResult[i];
      } else if (dartResult[i] === "*") {
        if (arr.length === 1) arr[0] *= 2;
        else if (arr.length >= 2) {
          arr[arr.length - 1] *= 2;
          arr[arr.length - 2] *= 2;
        }
      } else if (dartResult[i] === "#") {
        if (arr.length >= 1) arr[arr.length - 1] *= -1;
      }
    }
  }
  answer = arr.reduce((i, j) => i + j, 0);
  return answer;
}
console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
