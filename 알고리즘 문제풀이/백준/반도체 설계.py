#반도체 설계문제
#LIS 활용 풀이: https://www.acmicpc.net/problem/2352
import sys
input = sys.stdin.readline

n = int(input())
lines = list(map(int,input().split()))
st,en = 0,len(lines)
dp = [1 for i in range(n)]
for i in range(1,len(lines)):
    for j in range(0,i):
        if lines[i]>lines[j]:
            dp[i] = max(dp[i],dp[j]+1)
print(max(dp))