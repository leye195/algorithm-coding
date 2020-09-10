import sys
import heapq
input = sys.stdin.readline
#하나의 정점에서 다른 모든 정점으로 가는 최단 경로 구함 
#우선 순위 큐 사용하면 더 빨리 구현 가능
#if INF not in dist: break
#dist[to]=min(dist[to],dist[from]+adj[from][to])
#heapq.heappush(h,(dist[to],to))

INF=9999999
def dijkstra(dist,adj):
    h=[]
    heapq.heappush(h,(0,0))
    dist[0] = 0
    while h:
        d,p = heapq.heappop(h)
        if dist[p]<d:
            continue
        for i in range(len(adj[p])):
            if adj[p][i]:
                cost = d + adj[p][i]
                if cost < dist[i]:
                    dist[i] = cost
                    heapq.heappush(h,(cost,i))

    if INF in dist: #도달 못하는 경우 존재
        print("INF")
    else: #모두 도달 가능 
        print(dist)


adj=[
    [0,0,6,3,0],
    [3,0,0,0,0],
    [0,0,0,2,0],
    [0,1,1,0,1],
    [0,4,0,2,0]
]
dist=[0,INF,INF,INF,INF]#0 정점
dijkstra(dist,adj)

'''
Simple 
INF = int(1e9)
n,m = map(int,input().split())
start = int(input())
graph = [[] for i in range(n)]
visited = [0] * n
distance = [INF] *n
for i in range(m):
    a,b,c =map(int,input().split())
    graph[a].append((b,c))

def get_smallest_node():
    min_value,idx = INF,0
    for i in range(len(dist)):
        if min_value>dist[i]:
            min_value = dist[i]
            idx = 0
    return idx


O(v^2)의 복잡도를 가져 노드의 갯수사 5000개 이하일 경우 사용 가능
def dijkstra(start):
    distance[start] = 0
    visited[start] = 1
    for i in graph[start]: # 시작 지점과 연결된 부분의 거리 갱신
        distance[i[0]]=graph[i[1]]
    for i in range(0,n-1): #시작 노드 제외한 n-1개 노드에 대해 반복
        now = get_smallest_node()
        visited[now] = 1
        for j in range(graph[now]): #dist[now] 보다 거쳐가는 경로가 작은 경우 갱신
            cost = dist[now] + graph[now][j[1]]
            dist[j]=min(dist[j],cost)
for i in range(n):
    if dist[i]==INF:
        print("INF")
    else:
        print(dist[i])
'''