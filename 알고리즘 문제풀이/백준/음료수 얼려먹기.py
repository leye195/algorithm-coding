from collections import deque

n,m = map(int,input().split(" "))
board,visited,d,cnt=[],[[0]*m for i in range(n)],[[1,0],[0,1],[-1,0],[0,-1]],0
def bfs(board,visited,x,y):
    q=deque()
    q.append([x,y])
    visited[x][y]=1
    while(len(q)>0):
        tx,ty = q.popleft() 
        for i in range(0,4):
            dx,dy = d[i][0]+tx,d[i][1]+ty
            if(0<=dx<len(board) and 0<=dy<len(board[0]) and visited[dx][dy]==0 and board[dx][dy]==0):
                visited[dx][dy]=1
                q.append([dx,dy])

for i in range(n):
    board.append(list(map(int,input())))

for i in range(0,n):
    for j in range(0,m):
        if visited[i][j]==0 and board[i][j]==0:
            bfs(board,visited,i,j)
            cnt+=1
print(cnt)
