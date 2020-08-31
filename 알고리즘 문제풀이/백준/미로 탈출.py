from collections import deque
n,m = map(int,input().split(" "))
board,d,answer=[],[[0,1],[1,0],[0,-1],[-1,0]],0
for i in range(n):
    v = list(map(int,input()))
    board.append(v)

q,visited=deque(),[[0]*m for i in range(n)]
q.append([0,0,1])
visited[0][0]=1
while(len(q)>0):
    x,y,cnt = q.popleft()
    if x==n-1 and y==m-1:
        if answer==0:
            answer = cnt
        else:
            answer = min(answer,cnt)
    for i in range(4):
        dx,dy = d[i][0]+x,d[i][1]+y
        if(0<=dx<n and 0<=dy<m and visited[dx][dy]==0 and board[dx][dy]==1):
            visited[dx][dy]=1
            q.append([dx,dy,cnt+1])

print(answer)

'''
while q:
    x,y = q.popleft()
    for i in range(0,4):
        dx,dy = d[i][0]+x,d[i][1]+y
        if(0<=dx<n and 0<=dy<m and board[dx][dy]==1):
            board[dx][dy] = board[x][y]+1
            q.append([dx,dy])

'''