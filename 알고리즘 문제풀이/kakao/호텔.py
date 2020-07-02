
# 정확상 통과, 효율 실패  
def solution1(k, room_number):
    answer,r = {},[]
    def find(p,x):
        if(p[x][0]==x):
            return x
        return find(p,p[x][0])
    for i in range(0,k):
        answer[i+1]=[i+1,0] #parent,filled
    for number in room_number:
        if(answer[number][1]==0):
            answer[number][1]=1
            if(number+1<=k):
                answer[number][0]=number+1
            r.append(number)
        else:
            p=number
            while(answer[p][1]!=0):
                p = find(answer,p)
            answer[p][1]=1
            if(p+1<=k):
                answer[p][0]=p+1
            r.append(p)
        for i in range(0,k):
            x,y = find(answer,i+1),find(answer,answer[i+1][0])
            if(x<=y):
                answer[i+1][0]=y
            else:
                answer[answer[i+1]][0]=x
    return r

## 효율성,정확성 모두 통과
# union-find 활용 문제
import sys
sys.setrecursionlimit(1500)
def find(p,x):
    if(p.get(x,0)==0):
        return x
    p[x]=find(p,p[x])
    return p[x]
def solution2(k, room_number):
    answer,rooms = [],{}
    for room in room_number:
        if(rooms.get(room,0)==0):
            rooms[room] = find(rooms,room+1)
            answer.append(room)
        else:
            p = find(rooms,room)
            rooms[p] = find(rooms,p+1)
            answer.append(p)

    return answer
solution2(10,[1,3,4,1,3,1])