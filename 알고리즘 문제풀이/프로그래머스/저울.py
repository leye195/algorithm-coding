"""
저울추의 개수는 1개 이상 10,000개 이하입니다.
각 추의 무게는 1 이상 1,000,000 이하입니다.
추들로 측정할 수 없는 양의 정수 무게 중 최솟값은?

문제 접근법이 잘 못되었던거 같다...
엄청 헤맸음...백트랙도 써보고, for loop를 아용해서도 풀어보고 그랬지만
2~3개의 케이스만 맞던가, 아니면 시간 초과를 했음...

너무 모르겠어서 인터넷에서 찾아보니 무게 추의 합이 커버 할 수 있는 무게 범위라고 한다.
헐...너무 주위만 뺑 돌다가 돌아온거 같다..

추의 합이 무게 범위이고 추가될 추는 무조건 누적된 무게+1 보다 작거나 같아야 됨
이렇게 해야 누적된 범위의 무게들을 커버 가능하다고 함
if answer+1>=weight[i]:
    answer+=weight[i]
else:
    break

"""
def solution(weight):
    weight=sorted(weight)
    answer=weight[0]
    for w in weight[1:]:
        if answer+1>=w:
            answer+=w
        else:
            break
    return answer+1