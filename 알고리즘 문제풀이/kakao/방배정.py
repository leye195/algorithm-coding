def solution1(k, room_number):
    answer = [-1 for i in range(0,len(room_number))]
    room ,idx= [0 for i in range(0,k)],0
    for r in room_number:
        if room[r-1]==0:
            answer[idx]=r
            room[r-1]=1
        else:
            if(0 in room[r:]):
                i = room[r:].index(0)
                answer[idx]=i+1+r
                room[i+r]=1
            else:
                break
        idx+=1
    return answer

def solution2(k, room_number):
    answer = [-1 for i in range(0,len(room_number))]
    room ,idx= {0:[i+1 for i in range(0,k)],1:[]},0
    for r in room_number:
        if r in room[0]:
            answer[idx]=r
            room[1].append(r)
            room[0].pop(room[0].index(r))
        else:
            for i in range(0,len(room[0])):
                if room[0][i]>r:
                    room[1].append(room[0][i])
                    answer[idx]=room[0][i]
                    room[0].pop(i)
                    break
        idx+=1
    return answer