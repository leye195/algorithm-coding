import sys
import heapq

input = sys.stdin.readline

testcase = int(input())
for i in range(testcase):
    n = int(input())
    teams = list(map(int,input().split()))
    m = int(input())
    for j in range(m):
        