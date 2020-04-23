#SJF 알고리즘
#CPU에서 수행하는 순서를 결정하는 
#스케쥴링 알고리즘
#작업을 수행 요청하고 실제 수행이 끝날 때까지 
#대기하는 평균 시간을 최소로 하는 알고리즘은
#SJF는 작업량이 작은 작업을 먼저 수행함
#즉,작업 길이가 작은 순서로 대기
#반환 시간 = 작업 완료 시간 - 작업 요청 시간
#대기 시간 = 작업 시작 시간 – 작업 요청 시간
import heapq
def sjf(jobs):
    st,en,sum_time,wait_time,time=0,0,0,0,0
    disk,waiting,h=[],[],[]
    for job in jobs:
        heapq.heappush(h,job)
    while True:
        for i in range(len(h)):
            if time>=h[0][0]:
                waiting.append(heapq.heappop(h))
        waiting.sort(key=lambda x: x[-1])
        if disk==[]:
            if waiting!=[]:
                disk=waiting.pop(0)
                st=time
                en=time+disk[1]
        else:
            sum_time+=en-disk[0]
            wait_time+=st-disk[0]
            disk=[]
        time+=1
        if disk==[] and waiting==[]:
            break
    return [sum_time//len(jobs),wait_time//len(jobs)]