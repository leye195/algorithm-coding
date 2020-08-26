from collections import defaultdict
import heapq
#실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
#실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록
#도달한 유저가 없는 경우 해당 스테이지의 실패율은 0
def solution(N, stages):
    answer,h,total,d = [],[],len(stages),defaultdict(int)
    for i in stages:
        d[i]+=1 #현재 stage 도달한 유저 집계
    for i in range(1,N+1):
        if total>0:
            heapq.heappush(h,[-(d[i]/total),i]) #실패율 계산
            total-=d[i] #이전 stage 도달한 유저수 만큼 차감
        else:
            heapq.heappush(h,[-0.0,i]) 
    while h:
        answer.extend([heapq.heappop(h)[1]])    
    return answer