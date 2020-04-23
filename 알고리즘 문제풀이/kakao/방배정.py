def solution(k, room_number):
    answer,rooms=[],{}
    for i in room_number:
        n = i
        visit = [n]
        while n not in rooms:
            n = rooms[n]
            visit.append(n)
        answer.append(n)
        for j in visit:
            rooms[j]=n+1
    return answer

