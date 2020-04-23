"""
정확성 통과,효율성 실패
dp 배열에 일일히 대응 값들을 메모라이징 하면서 
코딩을 진행했음
결과값은 오류없이 잘 나오나, 효율성에서 떨어짐
시간을 줄일 더 빠른 방법이 필요함.
"""
def solution(n):
    idx,i = -1,0
    d={1:"1",2:"2",3:"4"}
    dp=[0 for i in range(n+1)]
    while i<n:
        for j in range(1,4):
            if idx==-1:
                dp[i]=str(d[j])
                i+=1
            else:
                dp[i]=dp[idx]+str(d[j])
                i+=1
            if i>n:
                break
        idx+=1
    return dp[-2]

"""
문제를 다시 읽어보니 1,2,4만 사용가능하다는 것이 중요하는 것을 
강조하는 것으로 3진법을 사용해야 되는것으로 보임
"""
def solution1(n):
    answer,d="",["1","2","4"]
    while n>0:
        n-=1
        answer=d[n%3]+answer
        n=n//3

def solution2(n):
    if n<=3:
        return "124"[n-1]
    else:
        n,m=divmod(n-1,3)
        return solution2(n)+"124"[m]