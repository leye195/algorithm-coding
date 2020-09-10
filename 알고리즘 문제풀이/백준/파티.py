#파티 문제 링크: https://www.acmicpc.net/problem/1238

import sys
import heapq

input = sys.stdin.readline
INF = int(1e9)
n,m,x = map(int,input().split())
dist = [[INF]*n for i in range(n)]
for i in range(n):
    dist[i][i]=0
graph = [[] for i in range(n)]
for i in range(m):
    a,b,t = map(int,input().split())
    graph[a-1].append((b-1,t))
for i in range(0,n): #모든 지점에 대해서 다익스트라 진행
    h = []
    heapq.heappush(h,(0,i))
    while h:
        d,now = heapq.heappop(h)
        if dist[i][now]<d:
            continue
        for j in graph[now]:
            cost = dist[i][now]+j[1]
            if cost<dist[i][j[0]]:
                dist[i][j[0]] = cost
                heapq.heappush(h,(cost,j[0]))
answer = 0
for i in range(0,n): #오고가는데 가장 많이 소비되는 시간 구함
    answer = max(answer,dist[i][x-1]+dist[x-1][i])
print(answer)