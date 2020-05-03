import re 
##시작 시간,끝 시간,음악 제목,악보
def changeMedoly(m): ## #포함음 소문자로 전환
    ret=""
    info = re.compile('[A-G]#?').findall(m)
    for i in info:
        if len(i)==2:
            ret+=i[0].lower()
        else:
            ret+=i
    return ret
def solution(m,musicinfos):
    answer,md,ma="",changeMedoly(m),0
    for music in musicinfos:
        info = music.split(",")
        st,en = int(info[0][0:2])*60 + int(info[0][3:]),int(info[1][0:2])*60 + int(info[0][3:])
        total_time,words = en - st, changeMedoly(info[3])
        if(md in words and ma<total_time):
            answer = info[2]
            ma = total_time
    if(ma!=0):
        return answer
    return "(None)"
