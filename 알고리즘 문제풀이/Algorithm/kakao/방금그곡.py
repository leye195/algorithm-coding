import re 
# 시작 시간,끝 시간,음악 제목,악보
# C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개 음에서
# #을 포함한 음은 소문자로 전환해줌으로 사용하기 편하게 해준다.
# ex) C# -> c, A# -> a, F# -> f ...
"""
조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 
재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
조건이 일치하는 음악이 없을 때에는 `(None)`을 반환한다.
"""
def changeMedoly(m):  
# #을 포함하는 음들은 소문자로 전환
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
