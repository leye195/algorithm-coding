#permutation을 활용한 완전 탐색 문제
#dist에서 한 명을 나열하는 방법, 두 명을 나열하는 방법,... 여덜 명을 선택해서 나열하는 
#모든 방법을 이용  
#원형을 직선으로 생각하여 시작점을 기준으로 모든 취약점을 탐색, 2가 시작지점일 경우
#n=12 ,weak = [1,2,3,10] => weak = [2,3,10,13] 이 된다
#즉, 시작점 오른쪽으로는 그래도 유지하고 왼쪽에 있는 원소들은 n을 더해줘야된다
# [2,3,4] + [12+1]

from itertools import permutations

def solution(n,weak,dist):
    dist.sort(reverse=True)
    for i in range(1,len(dist)+1):
        permutation = list(permutations(dist,i))
        for p in permutation:
            for st in range(0,len(weak)):
                le,ri = weak[:st],weak[st:]
                c_list,tmp = ri+[n+x for x in le],[x for x in p]
                while c_list and tmp:
                    x,y = c_list.pop(0),tmp.pop(0)
                    while c_list and c_list[0]<=x+y:
                        c_list.pop(0)
                return i    
    return -1