from itertools import combinations
def solution(relation):
    answer = 0
    uniqueS,allS = [],[]
    r,c=len(relation),len(relation[0])
    #모든 조합 목록
    for i in range(1,c+1):
        allS.extend([set(k) for k in combinations([j for j in range(0,c)],i)])
    #조합 체크,유일성 체크
    for com in allS:
        v=set()
        for i in range(r):
            tmp=""
            for j in com:
                tmp+=relation[i][j] #ex) ryanmusic apeachmath tubecomputer 
            v.add(tmp)
        if len(v)==r: 
            uniqueS.append(com)
    #최소성 확인, 제거
    delSet=set()
    for i in uniqueS:
        for j in uniqueS:
            if i.issubset(j) and i!=j:
                #i가 j의 부분집합이며 i는 j가 아닐경우
                #상위요소인 j를 제외시켜준다
                delSet.add(uniqueS.index(j)) 
    answer=len(uniqueS)-len(delSet)
    return answer