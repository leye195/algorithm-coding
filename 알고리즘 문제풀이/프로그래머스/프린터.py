#1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
#2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 
#   가장 마지막에 넣습니다.
#3. 그렇지 않으면 J를 인쇄합니다.
def solution(priorities,location):
    #[우선순위,인덱스]
    pi_list=[[priorities[i],i] for i in range(len(priorities))]
    waiting=[]
    while pi_list:
        pi=pi_list.pop(0) #가장 앞 꺼냄
        rest=[i for i,j in pi_list] # 나머지 
        if rest:
            max_p=max(rest) #나머지에서 제일 큰 값 체크
        if pi[0]<max_p:# 높은 값 존재
            pi_list.append(pi)
        else: # 높은 값 존재 안할 경우 인쇄
            waiting.append(pi)
    for i in range(len(waiting)):
        if waiting[i][1]==location:
            return i+1