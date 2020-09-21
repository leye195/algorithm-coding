#이진탐색 활용
#오름세 문제 링크: https://www.acmicpc.net/problem/3745
import sys
from bisect import bisect_left
input = sys.stdin.readline
while True:
    try:    
        n = int(input())
        dp=[1 for i in range(n)]
        records = list(map(int,input().split()))
        ans = [0]
        for i in records:
            pos = bisect_left(ans,i)
            if pos == len(ans):
                ans.append(i)
            elif ans[pos]>i:
                ans[pos] = i
        print(len(ans)-1)
    except: 
        exit()