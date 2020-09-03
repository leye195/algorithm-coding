# dp[i]=max(dp[i-1],d[i-2]+data[i])
def solution(n):
    answer = 0
    data = list(map(int,input().split(" ")))   
    dp=[0]*100
    dp[0],dp[1]=data[0],max(data[0],data[1])
    for i in range(2,n):
        dp[i]=max(dp[i-1],dp[i-2]+data[i])
    #dp = [[0,0] for i in range(n)]
    #dp[0][0],dp[1][1]=data[0],data[1] 
    #for i in range(2,n)
        #dp[i][0]=max(dp[i-1][0],dp[i-2][0]+data[i])
    #for i in range(2,n):
        #dp[i][1]=max(dp[i-1][1],dp[i-2][1]+data[i])
    print(max(dp))
    return answer
  

n = int(input())
solution(n)