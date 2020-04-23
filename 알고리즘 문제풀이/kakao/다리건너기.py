def solution(stones, k):
    answer,maxJmp = 0,0
    dp=[i for i in stones]
    while(maxJmp<k):
        tmp=0
        for i in range(len(dp)):
            if(dp[i]>0):
                dp[i]-=1
                maxJmp=max(maxJmp,tmp)
                tmp=0
            else:
                tmp+=1
        if(tmp!=0):
            maxJmp=max(maxJmp,tmp)
        answer+=1
    return answer-1
solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)