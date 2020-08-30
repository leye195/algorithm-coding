#문제 링크: https://www.acmicpc.net/problem/2805
#이분 탐색을 응용하여 최솟값이나 최댓값을 찾는 문제
#나무를 필요한 만큼만 집으로 가져가려고 한다. 
#적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.
'''
첫째 줄에 나무의 수 N과 상근이가 집으로 가져가려고 하는 나무의 길이 M이 주어진다.
 (1 ≤ N ≤ 1,000,000, 1 ≤ M ≤ 2,000,000,000)

둘째 줄에는 나무의 높이가 주어진다. 
나무의 높이의 합은 항상 M을 넘기 때문에, 상근이는 집에 필요한 나무를 항상 가져갈 수 있다. 
높이는 1,000,000,000보다 작거나 같은 양의 정수 또는 0이다.
'''
from collections import Counter
n,m = map(int,input().split(" "))
trees = Counter(list(map(int,input().split(" "))))
answer,lo,hi = 0,0,max(trees)

while(lo<=hi):
    mid,cnt = (lo+hi)//2,0
    for tree in trees.keys():
        if tree>mid:
            cnt+=(tree-mid)*trees[tree]
    if cnt<m: #양이 부족함
        hi = mid-1
    else: #가져갈수 있는 양이 중분함
        answer = mid 
        lo = mid+1
print(answer)

