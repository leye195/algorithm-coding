'''
현재 공장에 남아있는 밀가루 수량 stock, 밀가루 공급 일정(dates)과 해당 시점에 공급 가능한 밀가루 수량(supplies)
dates[i]에는 i번째 공급 가능일이 들어있으며, supplies[i]에는 dates[i] 날짜에 공급 가능한 밀가루 수량이 들어 있습니다.
'''
import heapq
def solution(stock, dates, supplies, k):
    answer,h,idx = 0,[],0
    if stock>=k:
        return answer
    while stock<k:
        for i in range(idx,len(dates)):
            if stock>=dates[i]:
                heapq.heappush(h,-supplies[i])
                idx+=1
            else:
                break
        stock-=heapq.heappop(h)
        answer+=1
    return answer