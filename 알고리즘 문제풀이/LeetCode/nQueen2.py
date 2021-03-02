#link: https://leetcode.com/problems/n-queens-ii/submissions/
class Solution:
    def totalNQueens(self, n: int) -> int:
        def check_is_acceptable(x,y,board):
            for i in range(x,len(board)):
                if board[i][y]=='Q':
                    return False
            for i in range(x,len(board)):
                if y+(i-x)<len(board) and board[i][y+(i-x)]=='Q':
                    return False
            for i in range(x,len(board)):
                if y-(i-x)>=0 and  board[i][y-(i-x)]=='Q':
                    return False
            return True
        
        def backtrack(result,x,y,board,cnt):
            if len(board)==cnt:
                rows = [''.join(row) for row in board]
                result.append(rows)
                return
            for i in range(n):
                if check_is_acceptable(x-1,i,board):
                    board[x-1][i] = 'Q'
                    backtrack(result,x-1,i,board,cnt+1)
                    board[x-1][i] = '.'
            return 
                    
        answer = []
        board = [['.' for j in range(n)] for i in range(n)]
        for i in range(n):
            board[n-1][i] = 'Q'
            backtrack(answer,n-1,i,board,1)
            board[n-1][i] = '.'
        return len(answer)