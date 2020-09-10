import sys
INF =int(1e9)
input = sys.stdin.readline
v,e = map(int,input().split())
dist=[[INF]*v for i in range(v)]
for i in range(e):
    a,b,c = map(int,input().split())
    dist[a-1][b-1] = c
for i in range(v):
    dist[i][i]=0
for k in range(v):
    for i in range(v):
        for j in range(v):
            if(i==j and dist[i][j]==0):
                dist[i][j] = dist[i][k]+dist[k][j]
            dist[i][j] = min(dist[i][j],dist[i][k]+dist[k][j])
answer = INF
for i in range(v):
    for j in range(v):
        if dist[i][j]>0 and dist[j][i]>0 :
            answer = min(answer,dist[i][i])
if answer == INF:
    print(-1)
else:
    print(answer)