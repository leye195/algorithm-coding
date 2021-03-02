# link: https://leetcode.com/problems/spiral-matrix-ii/submissions/
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        d = [[0,1],[1,0],[0,-1],[-1,0]]
        if n == 1:
            return [[1]]
        else:
            answer,x,y = [[0 for j in range(n)] for i in range(n)],0,0
            answer[0][0],cur_d,num = 1,0,2
            while num<=n*n:
                if 0<=x+d[cur_d][0]<n and 0<=y+d[cur_d][1]<n and answer[x+d[cur_d][0]][y+d[cur_d][1]]==0:
                    answer[x+d[cur_d][0]][y+d[cur_d][1]]=num
                    x,y = x+d[cur_d][0], y+d[cur_d][1]
                    num+=1
                else:
                    cur_d=(cur_d+1)%4
            return answer