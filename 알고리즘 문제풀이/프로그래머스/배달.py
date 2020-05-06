#1번 마을에서 각 마을로 가는 최단 거리 계산 후 각 거리 k와 비교 진행
#다익스트라 알고리즘 활용 문제 
#기존의 O(N^2)의 시간복잡도를 가지는 방법을 이용할 경우 시간 초과가 발생하기 때문에 
#min-heap을 이용해서 풀어줘야 된다
#O(nlogN)의 복잡도로 풀어줘야된다
import heapq
def solution(N, road, K):
    answer,INF = 0,999999
    if N==1:
        return 1
    board = [[INF for j in range(0,N)] for i in range(N)] 
    for i in range(N):
        board[i][i]=0
    for i in road:
        board[i[0]-1][i[1]-1]=min(board[i[0]-1][i[1]-1],i[2])
        board[i[1]-1][i[0]-1]=min(board[i[1]-1][i[0]-1],i[2])
    d,h=[INF]*N,[]
    d[0]=0
    heapq.heappush(h,(0,0))
    while h:
        dis,cur = heapq.heappop(h)
        if(d[cur]>=dis):
            for i in range(len(board[cur])):
                if cur!=i:
                    next_dist = dis+board[cur][i]
                    if d[i]>next_dist:
                        d[i]=next_dist
                        heapq.heappush(h,(next_dist,i))
    for i in d:
        if i<=K:
            answer+=1
    return answer