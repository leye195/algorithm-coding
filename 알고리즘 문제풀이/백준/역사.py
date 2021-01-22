import sys

input = sys.stdin.readline
INF = int(1e9)
n,m = map(int,input().strip().split())
g = [[INF]*n for i in range(n)]
for i in range(n):
    g[i][i]=0
for i in range(m):
    u,v = map(int,input().split())
    g[u-1][v-1]=1
for k in range(n):
    for i in range(n):
        for j in range(n):
            g[i][j]=min(g[i][j],g[i][k]+g[k][j])
s = int(input())
for i in range(s):
    u,v = map(int,input().split())
    if g[u-1][v-1] == INF and g[v-1][u-1]==INF:
        print(0) 
    elif g[u-1][v-1] == INF:
        print(1)
    elif g[v-1][u-1] == INF:
        print(-1)