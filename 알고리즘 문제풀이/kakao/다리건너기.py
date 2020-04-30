## 첫번째 시도는 dp를 활용해서 풀어 정확도는 통과했지만, 효율성에서 점수를 못 받음
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

## 카카오 문제 해설을 확인해 보니 이진탐색을 활용해서 풀면 
## 정확성과 효율성 다 통과 가능.
## m명이 돌다리를 건널수 있는지 확인하기 위해서는 먼저 m-1명이 건널수 있다는 것을 확인해야 됨
## m 번째 사람이 돌다리를 건널때 돌의 번호가 m보다 작을 경우 0으로 카운트 진행하며 0이 연속으로 k개인 경우 못건넌다고 판단   

def solution2(stones,k):
    answer,mi,ma = 0,0,max(stones)
    max_zeros,zeros = 0,0
    while mi<=ma:
        mid = (mi+ma)//2
        max_zeros, arr = 0,[]
        for i in range(len(stones)):
            if stones[i]<=mid:
                arr.append(stones[i])
            else:
                arr.append(0)
            if arr[i]==0:
                zeros+=1
            else:
                max_zeros = max(max_zeros,zeros)
                zeros=0
        if max_zeros<k:
            mi = mid+1
            answer = mid
        else:
            ma = mid-1
    return answer
