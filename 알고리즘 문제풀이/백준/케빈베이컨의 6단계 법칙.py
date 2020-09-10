#링크: https://www.acmicpc.net/problem/1389
import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)
n,m = map(int,input().split())
dist,result,tmp_list= [[INF]*n for i in range(n)],INF,[]
for i in range(n):
    dist[i][i]=0
for i in range(m):
    a,b = map(int,input().split())
    dist[a-1][b-1]=1
    dist[b-1][a-1]=1

#floyd 활용
for k in range(n):
    for i in range(n):
        for j in range(n):
            dist[i][j] = min(dist[i][j],dist[i][k]+dist[k][j])
for i in range(n):
    tmp = sum(dist[i])
    heapq.heappush(tmp_list,(tmp,i+1))
print(heapq.heappop(tmp_list)[1])#우선순위 큐 활용해 최소 값을 가지고 있는 사람 출력