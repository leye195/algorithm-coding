#하나의 정점에서 다른 모든 정점으로 가는 최단 경로 구함 
#우선 순위 큐 사용하면 더 빨리 구현 가능
#if INF not in dist: break
#dist[to]=min(dist[to],dist[from]+adj[from][to])
#heapq.heappush(h,(dist[to],to))
import heapq
INF=9999999
def dijkstra(dist,adj):
    h=[]
    for i in range(0,len(dist)):
        heapq.heappush(h,(dist[i],i))
    for i in range(len(dist)+1):
        if INF not in dist:
            break
        tmp=heapq.heappop(h)
        for to in range(0,len(adj[tmp[1]])):
            if adj[tmp[1]][to]!=0:
                dist[to]=min(dist[to],dist[tmp[1]]+adj[tmp[1]][to])
                heapq.heappush(h,(dist[to],to))
                #print(h)
        print(dist)

adj=[
    [0,0,6,3,0],
    [3,0,0,0,0],
    [0,0,0,2,0],
    [0,1,1,0,0],
    [0,4,0,2,0]
]
dist=[0,INF,INF,INF,INF,INF]#0 정점
dijkstra(dist,adj)


