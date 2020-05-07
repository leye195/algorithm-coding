"""
이분 탐색을 이용해서 푸는 알고리즘 문제
먼저, 이분탐색이 무엇인지는 알고 어떻게 실행이되는지 알고있지만
문제에서 어떻게 적용해야 되는 것인지 감이 전현 안 잡혔음ㅠ

게시판을 찾아보니 최대값을 max(budgets),0을 최소값으로 해서
상한값 limit를 이용한 할당 예산 합이 M값에 가깝게 만들수 있는 limit를 return 해주면 되는것.
"""
def solution(budgets,M):
    total=sum(budgets)
    if total<=M:
        return max(budgets)
    else:
        lo,hi=0,max(budgets)
        while lo<=hi:
            mid,total=(lo+hi)//2,0
            for b in budgets:
                if b>mid:
                    total+=mid
                else:
                    total+=b
            if total<=M:
                lo=mid+1
            else:
                hi=mid-1
    return hi
