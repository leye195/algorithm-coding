def solution(record):
    answer = []
    _msg={"Enter":"님이 들어왔습니다.","Leave":"님이 나갔습니다."}
    user={}
    for r in record:
        tmp=r.split(" ")
        if tmp[0]=='Enter' or tmp[0]=="Change":
            user[tmp[1]]=tmp[2]
    for r in record:
        tmp=r.split(" ")
        if tmp[0]=="Enter" or tmp[0]=="Leave":
            answer.append(user[tmp[1]]+_msg[tmp[0]])
    return answer