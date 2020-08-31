#Shortest Reach Using BFS
from collections import deque
n=6
def bfs(dist,adj):
    q=deque()
    visited=[1]+[0 for i in range(n-1)]
    q.append([0,0])#index,distance
    while q.qsize>0:
        tmp=q.popleft()
        for i in adj[tmp[0]]:
            if visited[i]==0:
                visited[i]=1
                dist[i]=tmp[1]+1
                q.put([i,dist[i]])

#최단거리를 bfs를 활용해 풀려고 하는 경우 모든 간선의 값이 동일한 경우, 효과적임
#간선의 비용이 다를 경우 다익스트라를 활용하는게 좋음



