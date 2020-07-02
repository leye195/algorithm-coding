def solution(stickers):
    dp=[[0 for j in range(0,len(stickers))]for i in range(0,len(stickers))]
    if(len(stickers)==0): 
        return stickers[0]
    dp[0][0],dp[1][1] = stickers[0],stickers[1]
    for i in range(2,len(stickers)-1):
        dp[0][i]=max(dp[0][i-1],dp[1][i-1]+stickers[i])
    for i in range(2,len(stickers)):
        dp[1][i]=max(dp[1][i-1],dp[1][i-2]+stickers[i])
    return max(dp[1][len(dp)-1],dp[0][len(dp)-2])