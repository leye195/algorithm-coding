from collections import defaultdict
# Complete the freqQuery function below.
#1x: Insert x in your data structure.
#2y  : Delete one occurence of y from your data structure, if present.
#3z  : Check if any integer is present whose frequency is exactly . If yes, print 1 else 
def freqQuery(queries):
    con=defaultdict(int)
    countDic=defaultdict(list)
    arr=[]
    for q in queries:
        if q[0]==1:
            if q[1] not in con:
                con[q[1]]=1
                countDic[1].append(q[1])
            else:
                p=con[q[1]]
                con[q[1]]+=1
                countDic[p].remove(q[1])
                countDic[con[q[1]]].append(q[1])
        elif q[0]==2:
            if q[1] in con and con[q[1]]>0:
                p=con[q[1]]
                con[q[1]]-=1
                countDic[p].remove(q[1])
                countDic[con[q[1]]].append(q[1])
        elif q[0]==3:
            found=countDic.get(q[1])
            arr.append(1 if found else 0)
        ##print(con)      
    return arr