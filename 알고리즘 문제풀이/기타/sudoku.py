class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(0,9):
            for j in range(0,9):
                if board[i][j]!='.':
                    cur=board[i][j]
                    for k in range(0,9):
                        if(k!=j and board[i][k]==cur):
                            return False
                        if(k!=i and board[k][j]==cur):
                            return False
        for i in range(0,3):
            for j in range(0,3):
                for k in range(i*3,i*3+3):
                    for q in range(j*3,j*3+3):
                        if board[k][q]!='.':
                            cur=board[k][q]
                            for x in range(i*3,i*3+3):
                                for y in range(j*3,j*3+3):
                                    if(x!=k and y!=q and board[x][y]==cur):
                                        return False
        return True
                        
        