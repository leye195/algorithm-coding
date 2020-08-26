#S:1제곱
#D:2제곱
#T:3제곱
# *스타상:해당 점수와 바로 전에 얻은 점수 각 2배),
# #야차상:해당 점수 마이너스)
def solution(dartResult):
    answer,num = [],""
    for d in dartResult:
        if d=="S":
            if(num!=""):
                answer.append(int(num))
                num=""
        elif d=="D":
            if num!="":
                answer.append(int(num)**2)
                num=""
        elif d=="T":
            if num!="":
                answer.append(int(num)**3)
                num=""
        elif d=="*":
            if len(answer)>0:
                if len(answer)==1:
                    answer[-1]=answer[-1]*2
                elif len(answer)>1:
                    answer[-1]=answer[-1]*2
                    answer[-2]=answer[-2]*2
        elif d=="#":
            if len(answer)>0:
                answer[-1]=answer[-1]*-1
        else:
            num+=d
    return sum(answer)