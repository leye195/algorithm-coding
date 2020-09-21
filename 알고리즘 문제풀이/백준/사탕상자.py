import sys

input = sys.stdin.readline

n = int(input())
candy = [0 for i in range(1000001)]
for i in range(n):
    tmp = list(map(int,input().split()))
    if len(tmp)==2:#a가 1, b는 꺼낼 사탕 순위,#a가 2, b는 넣을 사탕의 맛, c는 사탕의 개수(음수 경우 뺌)
        a,b = tmp
    elif len(tmp)==3:
        a,b,c = tmp
        candy[b]+=c