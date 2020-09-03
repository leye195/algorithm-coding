#링크: https://programmers.co.kr/learn/courses/30/lessons/43238?language=python3
def solution(n,times):
    lo,hi = 0,max(times)*n
    while(lo<=hi):
        mid,cnt = (lo+hi)//2,0
        for time in times:
            cnt+=mid//time
        if cnt>=n:
            answer = mid
            hi=mid-1
        else:
            lo=mid+1
    return answer
solution(6,[7,10])