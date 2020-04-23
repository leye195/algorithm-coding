"""
DFS를 이용한 문제 
[1,2,3,4,5]  
재귀함수를 이용해 수의 합이 target과 같은 경우 1을 반환
target과 같지 않은 경우 0을 반환
"""
def dfs(numbers,target,now,cnt):
    if now==target and cnt==len(numbers):
        return 1
    elif now!=target and cnt==len(numbers):
        return 0
    else:
        return dfs(numbers,target,now+numbers[cnt],cnt+1)+dfs(numbers,target,now-numbers[cnt],cnt+1)
def solution(numbers, target):
    return dfs(numbers,target,0,0)