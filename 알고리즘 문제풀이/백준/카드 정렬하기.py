import sys
import heapq
n = int(sys.stdin.readline())
answer = 0
cards = []
for i in range(n):
    heapq.heappush(cards,int(sys.stdin.readline()))
while len(cards)>1:
    x,y = heapq.heappop(cards),heapq.heappop(cards)
    sum_num = x+y
    answer+=sum_num
    heapq.heappush(cards,sum_num)
print(answer)