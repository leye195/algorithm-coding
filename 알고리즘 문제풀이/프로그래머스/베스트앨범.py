"""
[2 개씩 모아 베스트 앨범을 출시]
기준:
1.속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2.장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3.장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
"""
from collections import defaultdict
import heapq
def solution(genres, plays):
    answer = []
    d=defaultdict(int) #장르: 플레이 총합
    g_map={} #(고유번호,장르)
    p_map={} #(고유번호,플레이 수)
    for i in range(len(genres)):
        g_map[i]=genres[i]
        p_map[i]=plays[i]
    for i in range(len(genres)):
        d[genres[i]]+=p_map[i]
    h=[]
    for i,j in d.items():
        heapq.heappush(h,[-j,i])
    while len(h)>0:
        tmp=heapq.heappop(h)
        t=[]
        for i,j in g_map.items():
            if j==tmp[1]:
                t.append(p_map[i])
        t=sorted(t)
        t.reverse()
        if len(t)>2:
            t=t[:2]
        for i in range(len(t)):
            for key,value in p_map.items():
                if value==t[i] and key not in answer:
                    answer.append(key)
    return answer