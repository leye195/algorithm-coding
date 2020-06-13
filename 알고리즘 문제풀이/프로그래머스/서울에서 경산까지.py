#점화식: dp[현재 도시][현재 도시 소요 시간+k] = max(dp[현재 도시][현재 도시 소요 시간+k],dp[이전 도시][k]+travel[i][j])
def solution(K,travel):
    answer,dp=0,[[0 for j in range(K+1)] for i in range(len(travel)+1)]
    dp[0][travel[0][0]]=travel[0][1]
    dp[0][travel[0][2]]=travel[0][3]
    for i in range(1,len(travel)):
        for k in range(K+1):
            if(dp[i-1][k]!=0):
                if travel[i][0]+k<=K:
                    dp[i][travel[i][0]+k]=max(dp[i][travel[i][0]+k],dp[i-1][k]+travel[i][1])
                    answer=max(answer,dp[i][travel[i][0]+k])
                if travel[i][2]+k<=K:
                    dp[i][travel[i][2]+k]=max(dp[i][travel[i][2]+k],dp[i-1][k]=travel[i][3])
                    answer=max(answer,dp[i][travel[i][2]+k])
    return 0