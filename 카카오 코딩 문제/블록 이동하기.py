from collections import deque
def solution(board):
    def get_next_pos(pos,board):
        next_pos=[]
        pos=list(pos)
        x1,y1,x2,y2 = pos[0][0],pos[0][1],pos[1][0],pos[1][1]
        d=[[1,0],[0,1],[-1,0],[0,-1]]
        for i in range(4):
            n_x1,n_y1,n_x2,n_y2 = d[i][0]+x1,d[i][1]+y1,d[i][0]+x2,d[i][1]+y2
            if 0<=n_x1<len(board) and 0<=n_y1<len(board) and 0<=n_x2<len(board) and 0<=n_y2<len(board) and  board[n_x1][n_y1]==0 and board[n_x2][n_y2]==0:
                next_pos.append({(n_x1,n_y1),(n_x2,n_y2)})
        if x1==x2: #가로
            for i in [-1,1]:
                if 0<=x1+i<len(board) and 0<=x2+i<len(board) and board[x1+i][y1]==0 and board[x2+i][y2]==0:
                    next_pos.append({(x1,y1),(x1+i,y1)})
                    next_pos.append({(x2,y2),(x2+i,y2)})
        elif y1==y2: #세로
            for i in [-1,1]:
                if 0<=y1+i<len(board) and 0<=y2+i<len(board)  and board[x1][y1+i]==0 and board[x2][y2+i]==0:
                    next_pos.append({(x1,y1),(x1,y1+i)})
                    next_pos.append({(x2,y2),(x2,y2+i)})
        return next_pos

    n = len(board)
    visited = []
    q=deque()
    pos={(0,0),(0,1)}
    visited.append(pos)
    q.append((pos,0))
    while len(q)>0:
        pos,cost = q.popleft()
        if (n-1,n-1) in pos:
            return cost
        for next_pos in get_next_pos(pos,board):
            if next_pos not in visited:
                q.append((next_pos,cost+1))
                visited.append(next_pos)
    return 0
    
print(solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]))