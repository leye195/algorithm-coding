import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)
v,e = map(int,input().split())
k = int(input())
dist,graph = [INF]*v,[[] for i in range(v)]
dist[k-1]=0
for i in range(e):
    u,v,w = map(int,input().split())
    graph[u-1].append((v-1,w))
h = []
heapq.heappush(h,(0,k-1))
while h:
    d,now = heapq.heappop(h)
    if dist[now]<d:
        continue
    for i in graph[now]:
        cost = d + i[1]
        if cost < dist[i[0]]:
            dist[i[0]] = cost
            heapq.heappush(h,(cost,i[0]))
for i in dist:
    if i==INF:
        print("INF")
    else:
        print(i)