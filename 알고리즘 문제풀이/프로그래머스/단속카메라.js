function solution(routes) {
  let answer = 1,
    ri = 0;
  routes.sort((x, y) => (x[0] < y[0] ? -1 : 1));
  ri = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (routes[i][1] < ri) ri = routes[i][1];
    else if (routes[i][0] > ri) {
      answer += 1;
      ri = routes[i][1];
    }
  }
  return answer;
}
