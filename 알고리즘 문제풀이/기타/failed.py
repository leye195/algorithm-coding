
from collections import Counter as mset
import functools
def compare(o1,o2):
    return o2[1]-o1[1]
def solution(n,stages):
    answer=[]
    f_rate=[]
    stageSet=mset(stages)
    for stage in range(0,n):
        t=0
        fin=0
        for key in stageSet.keys():
            if key-1==stage:
                t+=stageSet[key]
            elif key-1>stage:
                fin+=stageSet[key]
        if(t+fin)!=0:
            f_rate.append([stage+1,t/(t+fin)])
        else:
            f_rate.append([stage+1,0])
    #print(f_rate)
    answer=[x[0] for x in sorted(f_rate,key=functools.cmp_to_key(compare))]
    return answer
print(solution(5,[2,1,2,6,2,4,3,3]))
print(solution(4,[4,4,4,4,4]))