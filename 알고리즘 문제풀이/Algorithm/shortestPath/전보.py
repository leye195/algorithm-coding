import heapq
import sys

INF = int(1e9)

def solution(graph,n,start):

    count = 0
    max_dist = 0
    distance = [INF]*n

    def dijkstra(start):
        q = []
        heapq.heappush(q,(0,start))
        distance[start] = 0

        while 1:
            dist,now = heapq.heappop()

            if distance[now] < dist:
                continue
            for i in graph[now]:
                cost = dist + i[1]
                if cost < distance[i[0]]:
                    distance[i[0]] = cost
                    heapq.heappush(q,(cost,i[0]))
    dijkstra(start)


    for d in distance:
        if d!=INF and d>0:
            count+=1
            max_dist = max(max_dist,d)
    return (count,max_dist)
