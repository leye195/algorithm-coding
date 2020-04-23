import heapq
def solution(jobs):
    time=0
    start_time=0
    finish_time=0
    sum_time=0
    tasks=0
    disk=[]
    h=[]
    waiting=[]

    for job in jobs:
        heapq.heappush(h,job)
    tasks=len(h)

    while True:
        for i in range(len(h)):
            if time>=h[0][0]:
                waiting.append(heapq.heappop(h))
        waiting.sort(key=lambda x: x[-1])
        if disk==[]:
            if waiting!=[]:
                disk=waiting.pop(0)
                start_time=time
                finish_time=time+disk[1]
        else:
            if time==finish_time:
                sum_time+=finish_time-disk[0]
                disk=[]
                continue
        time+=1
        if h==[] and disk==[]:
            break
    print(sum_time//tasks)