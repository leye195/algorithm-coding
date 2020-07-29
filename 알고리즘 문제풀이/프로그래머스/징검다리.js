//[링크] https://programmers.co.kr/learn/courses/30/lessons/43236
//바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중에 가장 큰 값을 return
function solution(distance, rocks, n) {
  let answer = 0,
    le = 0,
    ri = distance;
  rocks.sort((x, y) => x - y); //이분 탐색 활용하기 위해 오름차순으로 정렬
  while (le <= ri) {
    const mid = Math.floor((le + ri) / 2);
    let prev = 0,
      minDist = distance,
      cnt = 0;
    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev <= mid) {
        cnt++; //돌 제거
      } else {
        //제거 안 한 경우 현재 바위와 이전 바위의 거리 값을 최소값과 비교
        minDist = Math.min(minDist, rocks[i] - prev);
        prev = rocks[i];
      }
    }
    //마지막 돌인 경우 도착지점과 거리 계산
    if (distance - prev <= mid) {
      cnt++; // 돌 제거
    } else {
      minDist = Math.min(minDist, distance - prev);
    }
    if (cnt <= n) {
      // n번 이하의 기회로 minDist를 만족했기에 기대갑 상승
      //최소 거리 중 최대 값 추출,
      answer = Math.max(answer, minDist);
      le = mid + 1;
    } else {
      //n 이상의 기회를 활용했기에 기대 값을 낮춤
      ri = mid - 1;
    }
  }
  return answer;
}
