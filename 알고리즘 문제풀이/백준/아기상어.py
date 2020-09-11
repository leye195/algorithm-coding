import sys
from collections import deque
INF = int(1e9)
input = sys.stdin.readline
d=[[0,1],[1,0],[0,-1],[-1,0]]
n = int(input())
graph,st_x,st_y,now = [],0,0,2

def bfs(): #이동 가능한 거리 테이블 반환을 위해 bfs 활용
    dist = [[-1]*n for i in range(n)]
    q = deque([(st_x,st_y)])
    dist[st_x][st_y] = 0
    while q:
        x,y = q.popleft()
        for i in range(4):
            dx,dy = x+d[i][0],y+d[i][1]
            if 0<=dx<n and 0<=dy<n:
                if dist[dx][dy] == -1 and graph[dx][dy]<=now:
                    dist[dx][dy] = dist[x][y]+1
                    q.append((dx,dy))
    return dist

def find(dist):
    # 먹을 수 있는 물고기들 중 거리가 제일 작은 위치에 있는 
    # 물고기의 좌표와 거리를 반환,
    x,y=0,0
    min_dist = INF
    for i in range(n):
        for j in range(n):
            if dist[i][j]!=-1 and 1<=graph[i][j]<now:
                if dist[i][j]<min_dist:
                    x,y = i,j
                    min_dist = dist[i][j]
    if min_dist == INF:
        return None
    else:
        return x,y,min_dist

for i in range(n):
    graph.append(list(map(int,input().split())))
for i in range(n):
    for j in range(n):
        if graph[i][j]==9:
            st_x,st_y = i,j
            graph[st_x][st_y] = 0
result,ate = 0,0

while True:
    value = find(bfs())
    if value == None:
        break
    else:
        st_x,st_y = value[0],value[1]
        result+=value[2]
        graph[st_x][st_y] = 0 #먹은 곳은 0으로 변경
        ate+=1 #먹은 횟수
        if ate>=now: #먹은 횟수가 현재 크기와 같은 경우
            now+=1 #사이즈 up
            ate=0
print(result)