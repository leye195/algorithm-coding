import sys
import heapq
INF = int(1e9)
input = sys.stdin.readline

n,m = map(int,input().split())
graph = [[]*n for i in range(n)]

for i in range(m):
    a,b,c = map(int,input().split())
    graph[a-1].append((b-1,c))
    graph[b-1].append((a-1,c))

for i in range(n):
    h = []
    dist,links = [INF]*n,[0]*n
    for j in graph[i]:
        links[j[0]]=j[0]
    print(links)
    dist[i]=0
    heapq.heappush(h,(0,i))
    while h:
        d,now = heapq.heappop(h)
        if d>dist[now]:
            continue
        for to in graph[now]:
            cost = d+to[1]
            if cost < dist[to[0]]:
                dist[to[0]] = cost
                links[to[0]] = now
                heapq.heappush(h,(cost,to[0]))
    print(links)