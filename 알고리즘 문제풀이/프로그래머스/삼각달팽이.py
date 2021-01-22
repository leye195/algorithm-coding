def getLimit(n):
    tmp=0
    for i in range(1,n+1):
        tmp+=i
    return tmp
def solution(n):
    answer,result= [[0]*n for i in range(n)],[]
    cnt = 2
    x,y=0,0
    answer[0][0]=1
    while cnt<=getLimit(n):
        # 아래 대각선으로
        while x<n:
            if x+1<n: 
                if answer[x+1][y]==0:
                    answer[x+1][y]=cnt
                    cnt+=1
                    x+=1
                else:
                    break
            else:
                break
        #오른쪽으로
        while y<n:
            if y+1<n:
                if answer[x][y+1]==0:
                    answer[x][y+1]=cnt
                    cnt+=1
                    y+=1
                else:
                    break
            else:
                break
        #위로 대각선
        while x>=0 and y>=0:
            if x-1>=0 and y-1>=0:
                if answer[x-1][y-1]==0:  
                    answer[x-1][y-1]=cnt
                    cnt+=1 
                    x-=1
                    y-=1
                else:
                    break
            else:
                break
    for i in range(n):
        for j in range(n):
            if answer[i][j]:
                result.append(answer[i][j])
    return result
solution(4)
solution(5)
solution(6)