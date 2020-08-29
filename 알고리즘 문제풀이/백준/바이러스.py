
n,m = input().split(" ")
board,virus,walls,visited = [],[],[],[[0 for j in range(int(m))]for i in range(int(n))]
answer,d = 0,[[-1,0],[0,-1],[1,0],[0,1]]
for i in range(0,int(n)):
    tmp = input().split(" ")
    board.append([int(j) for j in tmp])
for i in range(int(n)):
    for j in range(int(m)):
        if board[i][j]==2:
            virus.append([i,j])
        elif board[i][j]==0:
            walls.append([i,j])
def bfs():
    q = []
    for i in range(len(virus)):
        q.append(virus[i])
        visited[virus[i][0]][virus[i][1]] = 1
    while(len(q)>0):
        x,y = q.pop(0)
        for i in range(0,4):
            dx,dy = x+d[i][0],y+d[i][1]
            if(0<=dx<int(n) and 0<=dy<int(m) and visited[dx][dy]==0 and board[dx][dy]==0):
                q.append([dx,dy])
                visited[dx][dy]=1
    cnt = 0
    for i in range(int(n)):
        for j in range(int(m)):
            if board[i][j]==0 and visited[i][j]==0:
                cnt+=1
    return cnt

for i in range(0,len(walls)):
    for j in range(i+1,len(walls)):
        for k in range(j+1,len(walls)):
            visited =[[0 for j in range(int(m))]for i in range(int(n))]
            board[walls[i][0]][walls[i][1]],board[walls[j][0]][walls[j][1]],board[walls[k][0]][walls[k][1]] = 1,1,1
            answer=max(answer,bfs())
            board[walls[i][0]][walls[i][1]],board[walls[j][0]][walls[j][1]],board[walls[k][0]][walls[k][1]] = 0,0,0
print(answer)
