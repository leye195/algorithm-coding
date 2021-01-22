
from bisect import bisect_left
def solution(m, k):
    answer,mp,flag,idx = '',{},False,0
    for i in m:
        if idx<len(k) and i==k[idx] and i not in mp.keys():
            if flag==False:
                mp[i]=1
                flag=True
                idx+=1
            else:
                answer+=i
                flag=False
        else:
            answer+=i
            flag=False
    return answer