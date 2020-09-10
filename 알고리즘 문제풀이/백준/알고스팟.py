#알고스팟 문제 링크: https://www.acmicpc.net/problem/1261
import sys
import heapq
INF = int(1e9)
input=sys.stdin.readline
n,m = map(int,input().split())
dist,visited=[[INF]*n for i in range(m)],[[0]*n for i in range(m)]
board,d=[],[[0,1],[1,0],[0,-1],[-1,0]]
for i in range(m):
    t = input().strip()
    tmp=[]
    for j in t:
        tmp.append(int(j))
    board.append(tmp)
h = []
heapq.heappush(h,(0,0,0))
dist[0][0],visited[0][0]=0,1
while h: #다익스트라 활용 
    c,x,y = heapq.heappop(h)
    if dist[x][y]<c:
        continue
    for i in range(0,4):
        dx,dy = x+d[i][0],y+d[i][1]
        if(0<=dx<m and 0<=dy<n and visited[dx][dy]==0):
            #범위 및 방문 여부 체크
            if board[dx][dy]==1:
                cost = c+1
                dist[dx][dy]=min(dist[dx][dy],cost)
                heapq.heappush(h,(cost,dx,dy))
            else:
                dist[dx][dy]=c
                heapq.heappush(h,(c,dx,dy))
            visited[dx][dy]=1
print(dist[m-1][n-1])