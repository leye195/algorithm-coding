#Shortest Reach Using BFS
from queue import Queue
n=6
def bfs(dist,adj):
    q=Queue()
    visited=[1]+[0 for i in range(n-1)]
    q.put([0,0])#index,distance
    while q.qsize>0:
        tmp=q.get()
        for i in adj[tmp[0]]:
            if visited[i]==0:
                visited[i]=1
                dist[i]=tmp[1]+1
                q.put([i,dist[i]])


