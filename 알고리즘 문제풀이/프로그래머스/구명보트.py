"""
[70,50,80,50]  limit:100
50 50 70 80
50 50
70
80

[50,70,80]

"""
def solution(people, limit):
    answer,le,ri = 0,0,len(people)-1
    people=sorted(people)
    while le<ri:
        if people[le]+people[ri]>limit:
            answer+=1
        elif people[le]+people[ri]<=limit:
            le+=1
            answer+=1
        ri-=1
    if le==ri:
        answer+=1
    return answer

def solution2(people,limit):
    answer=0
    people=sorted(people)
    while people:
        if len(people)==1:
            answer+=1
            break
        #제일 작은 값과 가장 큰값의 합이 limit를 넘는지 안넘는지 검사 진행
        if people[0]+people[-1]>limit: 
            people.pop()
        elif people[0]+people[-1]<=limit:
            people.pop()
            people.pop(0)
        answer+=1
    return answer