'''
길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
단계 2로 돌아간다.
'''

def initIndexList(): #길이가 1인 모든 단어를 포함하도록 사전을 초기화
    d,c={},65
    for i in range(1,27):
        d[chr(c)]=i
        c+=1
    return d
def solution(msg):
    answer,d,idx = [],initIndexList(),0
    while(idx<len(msg)):
        w,c="",""  #현재 입력 w,다음 글자 c 
        for i in range(idx,len(msg)):
            if(w+msg[i] not in d.keys()):
                idx = i
                c = msg[i]
                break
            w+=msg[i]
            idx+=1
        if c !="": #처리되지 않은 다음 글자 존재시 w+c 사전에 등록
            d[w+c]=len(d.keys())+1
        answer.append(d[w]) # w에 해당하는 색인 번호 출력
    return answer
print(solution("KAKAO"))
print(solution("TOBEORNOTTOBEORTOBEORNOT"))