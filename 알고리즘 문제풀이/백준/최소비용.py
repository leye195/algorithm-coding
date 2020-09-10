import sys
import heapq
INF = int(1e9)
input = sys.stdin.readline

n = int(input())
m = int(input())
graph = [[]for i in range(n)]
dist,h=[INF]*n,[]
for i in range(m):
    a,b,c = map(int,input().split())
    graph[a-1].append((b-1,c))
st,en = map(int,input().split())
dist[st-1]=0 #시작점 거리 설정
heapq.heappush(h,(0,st-1))
#다익스트라 활용, en-1으로 가는 최소 비용 계산
while h:
    d,now = heapq.heappop(h)
    if dist[now]<d:
        continue
    for i in graph[now]:
        cost = d+i[1]
        if cost<dist[i[0]]:
            dist[i[0]] = cost
            heapq.heappush(h,(cost,i[0]))
print(dist[en-1])