import sys
input = sys.stdin.readline
INF = int(1e9)
t = int(input())
for i in range(t):
    n = int(input())
    dist,pos = [[INF]*(n+2) for i in range(n+2)],[(None,None) for i in range(n+2)]
    for j in range(n+2):
        x,y=map(int,input().split())
        pos[j]=[x,y]
    for j in range(n+2):
        for k in range(n+2):
            if(abs(pos[j][0]-pos[k][0])+abs(pos[j][1]-pos[k][1])<=1000):
                dist[j][k]=1
    for l in range(n+2):
        for j in range(n+2):
            for k in range(n+2):
                dist[j][k] = min(dist[j][k],dist[j][l]+dist[l][k])
    if(0<dist[0][n+1]<n+2):
        print("happy")
    else:
        print("sad")