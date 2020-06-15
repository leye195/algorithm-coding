function getMaxDays(m) {
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return 29;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
}
//SUN,MON,TUE,WED,THU,FRI,SAT
//0,1,2,3,4,5,6
function solution(a, b) {
  let arr = [],
    list = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    currentDay = 5;
  for (let i = 0; i < 13; i++) arr.push(new Array(32).fill(-1));
  for (let i = 1; i <= 12; i++) {
    const days = getMaxDays(i);
    for (let d = 1; d <= days; d++) {
      arr[i][d] = currentDay;
      currentDay = (currentDay + 1) % 7;
    }
  }
  return list[arr[a][b]];
}
