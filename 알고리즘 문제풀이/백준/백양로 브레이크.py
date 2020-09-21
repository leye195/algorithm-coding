#백양로 브레이크 
#링크: https://www.acmicpc.net/problem/11562

''''
플로이드를 활용하는 문제로
문제 조건에서 단방향을 양방향을 바꿔줘야 되는 것을 볼때
이미 양방향으로 들어온 경로에 대해서는 값을 0으로 주고
단방향에 대해서는 단뱡향 u->v경로에 대해 0, v->u에 대해서는 1로 값을 줘 
양방향으로 바꾸고 지나간거로 계산해준다.
''''
INF = int(1e9)
input = sys.stdin.readline

n,m = map(int,input().split())
graph=[[INF]*(n+1) for i in range(n+1)]
for i in range(n+1):
    graph[i][i]=0
for i in range(m):
    u,v,b = map(int,input().split())
    if b==1:
        graph[u][v],graph[v][u] = 0,0
    else:
        graph[u][v],graph[v][u] = 0,1
for k in range(1,n+1):
    for u in range(1,n+1):
        for v in range(1,n+1):
            graph[u][v] = min(graph[u][v],graph[u][k]+graph[k][v])
k = int(input())
for i in range(k):
    s,e = map(int,input().split())
    print(graph[s][e])
import sys
INF = int(1e9)
input = sys.stdin.readline

n,m = map(int,input().split())
graph=[[INF]*(n+1) for i in range(n+1)]
for i in range(n+1):
    graph[i][i]=0
for i in range(m):
    u,v,b = map(int,input().split())
    if b==1:
        graph[u][v],graph[v][u] = 0,0
    else:
        graph[u][v],graph[v][u] = 0,1
for k in range(1,n+1):
    for u in range(1,n+1):
        for v in range(1,n+1):
            graph[u][v] = min(graph[u][v],graph[u][k]+graph[k][v])
k = int(input())
for i in range(k):
    s,e = map(int,input().split())
    print(graph[s][e])