#문자열 형식으로 숫자 number와 제거할 수의 개수 k
#len(number)-k : 나머지 숫자들
# - [가장 큰 수는 앞의 자리 수가 가장 큰 수]
# 스택 횔용해서 풀이 진행
# 빈 스택인 경우: push
# 스택의 top이 number[idx] 보다 작고 제거해야될 수 k>0인 경우  Pop 그리고 k=-1, 큰 경우 number[idx] Push 진행
def solution(number, k):
    answer,number = [],list(number)
    for i in range(len(number)):
        while k>0 and len(answer)>0 and answer[-1]<number[i]:
            answer.pop()
            k-=1
        answer.append(number[i])
    if k>0:
        return "".join(answer[:len(answer)-k])
    return "".join(answer)
        