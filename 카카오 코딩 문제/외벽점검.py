#카카오 문제해설 참고해서 풀어봄 
from itertools import permutations
def openWeak(result,start,weak,n):
    tmp,idx = [],start
    while(len(tmp)<len(weak)):
        if(idx>=len(weak)):
            idx=0
        tmp.append(weak[idx])
        idx+=1
    for i in range(len(tmp)):
        if i>0:
            if tmp[i]<tmp[i-1]:
                tmp[i]=tmp[i]+n
    result.append([i for i in tmp])

def solution(n,weak,dist):
    answer,permutation,dist_permutations  = -1, [], list(permutations(dist,len(dist)))
    dist.sort(reverse=True)
    for i in range(0,len(weak)):
        openWeak(permutation,i,weak,n) #원을 직선으로 펴줌
    for p in permutation:
        for d in dist_permutations:
            visit,pidx,idx = [0 for i in range(len(p))],-1,0
            while(idx<len(dist)):
                if(0 not in visit): #다 방문한 경우 
                    break
                for i in range(len(visit)): #방문하지 않는 부분 선택
                    if(visit[i]==0):
                        pidx=i #방문 안한 곳 위치
                        break
                if(pidx!=-1):
                    num = p[pidx] + d[idx]
                    for i in range(len(p)):
                        if(p[i]<=num):
                            visit[i]=1
                        else:
                            break
                    idx+=1 
            if(0 not in visit):
                if answer==-1:
                    answer = idx
                else:
                    answer = min(answer,idx)
    print(answer)
    return answer

solution(12,[1,5,6,10],[1,2,3,4])
solution(12,[1, 3, 4, 9, 10],[3,5,7])
solution(50,[1],[6])
solution(200,[0,10,50,80,120,160],[1,10,5,40,30])
