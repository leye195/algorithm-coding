## union-find 응용 시
## python에서는 재귀에 대해서 제한이 걸려있기 때문에 재귀 제한을 늘려줘야 통과가 됨
import sys
sys.setrecursionlimit(1500)

def find_room(rooms,x):
    if x not in rooms:
        rooms[x]=x+1
        return x
    p = find_room(rooms,rooms[x])
    rooms[x]=p+1
    return p
def solution1(k, room_number):
    answer,rooms = [],{}
    for i in room_number:
        room = find_room(rooms,i)
        answer.append(room)
    return answer

# 방문했던 방 만 업데이트 진행해주는 방법
# ex) [1,3,4,1,3] 경우 4번째 에서는 visit가 [1,2] , n = 2 됨으로  1과 2는 모두 3을 부모로 가짐
# 5번째 에서는 visit가 [3,4,5], n = 5 되어, 3,4,5는 6을 부모로 가지게 되는 것
def solution2(k, room_number):
    answer,rooms = [],{}
    for i in room_number:
        n = i
        visit=[n]    
        while n in rooms:
            n = rooms[n]
            visit.append(n)
        answer.append(n)
        for j in visit:
            rooms[j]=n+1
    return answer