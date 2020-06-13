'''
문제 조건:
1.전체 학생의 수는 2명 이상 30명 이하입니다.
2.체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다. (한 곳에 번호 중복 불가-> Set)
3.여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
4.여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
5.여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

- [5번 조건을 이해하는게 중요. 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있다 라는 것은 해당 학생의 번호가 lost와 reserve 안에 존재한다는 것으로, 못 빌려줌]
'''
def solution(n,lost,reserve):
    answer,dp = 0,[1 for i in range(n)]
    for i in range(len(lost)):
        dp[lost[i]-1]-=1
    for i in range(len(reserve)):
        dp[reserve[i]-1]+=1
    for i in range(n):
        if dp[i]==2 and i>0 and dp[i-1]==0:
            dp[i-1],dp[i] = dp[i-1]+1,dp[i]-1
        if dp[i]==2 and i<n-1 and dp[i+1]==0:
            dp[i+1],dp[i] = dp[i+1]+1,dp[i]-1
    for d in dp:
        if d>0:
            answer+=1
    return answer
solution(5,[2,4],[1,3,5])
solution(5,[2,4],[3])
solution(3,[1,2],[2,3])