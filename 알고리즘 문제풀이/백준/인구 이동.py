from collections import deque
import sys

n,l,r = map(int,sys.stdin.readline().rstrip().split(" "))
answer,board,d = 0,[],[[-1,0],[0,-1],[1,0],[0,1]]
visited = [[0]*n for i in range(n)]

#bfs 활용 풀이
def bfs(x,y,l,r):
    q,total,cnt,tmp,visited[x][y] = deque([[x,y]]),board[x][y],1,[[x,y]],1
    while len(q):
        tx,ty = q.popleft()
        for i in range(4):
            dx,dy = tx+d[i][0],ty+d[i][1]
            if 0<=dx<len(board) and 0<=dy<len(board) and visited[dx][dy]==0 and l<=abs(board[dx][dy]-board[tx][ty])<=r:
                visited[dx][dy] =1
                total+=board[dx][dy]
                q.append([dx,dy])
                tmp.append([dx,dy])
                cnt+=1
    if cnt>1:
        newNum = total//cnt
        for tx,ty in tmp:
            board[tx][ty] = newNum
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))

while True:
    cnt,visited = 0,[[0]*n for tmp in range(n)]
    for i in range(n):
        for j in range(n):
            if visited[i][j]==0:
                bfs(i,j,l,r)
                cnt+=1
    if cnt == n*n:
        break
    answer+=1
print(answer)

'''
dfs 활용 풀이
def dfs(x,y,l,r,tmp):
    visited[x][y]=1
    for i in range(0,4):
        dx,dy = x+d[i][0],y+d[i][1]
        if 0<=dx<len(board) and 0<=dy<=len(board) and visited[dx][dy]==0 and l<=abs(board[x][y]-board[dx][dy])<=r:
            tmp.append([dx,dy])
            dfs(dx,dy,l,r,tmp)
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))

while True:
    cnt,visited,moved = 0,[[0]*n for tmp in range(n)],False
    for i in range(n):
        for j in range(n):
            if visited[i][j]==0:
                tmp = []
                dfs(i,j,l,r,tmp)
                if len(tmp)>0:
                    s = sum([board[x][y] for x,y in tmp])//len(tmp)
                    for x,y in tmp:
                        board[x][y] = s
                    moved = True
    if moved:
        answer+=1
    else:
        break
print(answer)
'''