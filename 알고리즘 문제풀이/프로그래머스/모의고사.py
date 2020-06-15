#1, 2, 3, 4, 5
#2, 1, 2, 3, 2, 4, 2, 5
#3, 3, 1, 1, 2, 2, 4, 4, 5, 5
def solution(answers):
    answer,check,checked,m = [],[[1,2,3,4,5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]],[[],[],[]],0
    for i in range(3):
        checked[i] = sum([1 if answers[j]==check[i][j%len(check[i])]  else 0  for j in range(len(answers))])
    m = max(checked)
    for i in range(3):
        if checked[i]==m:
            answer.append(i+1)
    return answer