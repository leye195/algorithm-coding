
#일년마다 그 칸에 동서남북 네 방향으로 붙어있는 0이 저장된 칸의 개수만큼 줄어든다
def solution(n,m,board):
    answer,d = 0,[[-1,0],[0,-1],[1,0],[0,1]]
    def bfs(board,visited,x,y):
        q = [[x,y]]
        visited[x][y]=1
        while(len(q)>0):
            qx,qy = q.pop(0)
            for i in range(0,len(d)):
                dx,dy = d[i][0]+qx,d[i][1]+qy
                if(0<=dx<n and 0<=dy<m and visited[dx][dy]==0 and board[dx][dy]>0):
                    visited[dx][dy]=1
                    q.append([dx,dy])
        return 

    q,cnt,flag = [],0,False
    for i in range(n):
        for j in range(m):
            if(board[i][j]):
                q.append([i,j])
    while(len(q)>0):
        visited,around = [[0 for j in range(m)]for i in range(n)],[[0 for j in range(m)]for i in range(n)]
        answer+=1
        while(len(q)>0):
            x,y = q.pop(0)
            for i in range(0,4):
                dx,dy = x+d[i][0],y+d[i][1]
                if(0<=dx<n and 0<=dy<m and visited[dx][dy]==0):
                    if(board[dx][dy]==0):
                        around[x][y]+=1
        for i in range(1,n-1):
            for j in range(1,m-1):
                if(board[i][j]-around[i][j]>=0):
                    board[i][j]=board[i][j]-around[i][j]
                else:
                    board[i][j]=0
                if(board[i][j]):
                    q.append([i,j])
        cnt = 0
        for i in range(1,n-1):
            for j in range(1,m-1):
                if(visited[i][j]==0 and board[i][j]):
                    visited[i][j]=1
                    bfs(board,visited,i,j)
                    cnt+=1
        if(cnt>=2):
            print(answer)
            return 
    if(flag==False):
        answer = 0
    print(answer)
    return 



        

    

n,m = [int(i) for i in list(input().split(" "))]
board = []
for i in range(n):
    r = [int(i) for i in input().split(" ")]
    board.append(r)
solution(n,m,board)