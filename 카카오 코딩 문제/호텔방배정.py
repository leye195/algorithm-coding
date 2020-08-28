
def solution(k,room_number):
    answer,rooms = [],{}
    def find(p,x):
        if(p[x]["parent"]==x):
            return x
        p[x]["parent"]=find(p,p[x]["parent"])
        return p[x]["parent"]
    for i in range(1,k+1):
        rooms[i]={"parent":i,"occupied":False}
    for i in room_number:
        if rooms[i]["occupied"]==False:
            rooms[i]["occupied"],rooms[i]["parent"] = True,i+1
            answer.append(i)
        else:
            p = find(rooms,i)
            rooms[p]["parent"],rooms[p]["occupied"] = find(rooms,p+1),True
            answer.append(p)
    print(answer)
    return answer
solution(10,[1,3,4,1,3,1])