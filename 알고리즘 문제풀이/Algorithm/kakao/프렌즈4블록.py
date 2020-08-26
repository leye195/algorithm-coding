#높이:m,넓이:n
#판:board
#
#하나씩 하나씩 체크를 진행 (2x2이가 성립 되는 경우)
#board[i][j]==board[i+1][j] and board[i][j]==board[i][j+1]
#and board[i][j]==board[i+1][j+1]
#remove할 블록들을 visited에 체크해줌
#visited[i][j]=1,visited[i+1][j]=1 visited[i][j+1]=1 visited[i+1][j+1]=1
#
#삭제시,삭제된 위치에 위에 남아있는 블록이 빈자리를 채워야됨:
#board[k+1][j]=board[k][j] 
#board[k][j]='0' //0은 빈 칸을 의미
def solution(m, n, board):
    answer,flag,b = 0,True,[]
    for i in board:
        tmp=[j for j in i]
        b.append(tmp)
    while flag:
        visited=[[0 for i in range(n)] for j in range(m)]
        flag=False
        for i in range(m-1): #
            for j in range(n-1):
                if b[i][j]!="0" :
                    if b[i][j]==b[i+1][j] and b[i][j]==b[i][j+1] and b[i][j]==b[i+1][j+1]:
                        visited[i][j]=1
                        visited[i+1][j]=1
                        visited[i][j+1]=1
                        visited[i+1][j+1]=1
                        flag=True
                else:
                    continue
        for i in range(m):
            for j in range(n):
                if visited[i][j]==1:
                    answer+=1
                    for k in range(i-1,-1,-1):
                        b[k+1][j]=b[k][j]
                        b[k][j]="0"
    return answer