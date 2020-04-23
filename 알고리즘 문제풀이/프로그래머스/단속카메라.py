
"""
routes을 sort한 뒤,그리디 방법으로 범위를 탐색하면서 코딩을 진행
"""
def solution(routes):
    routes.sort()
    tmp,answer=routes[0][1],1
    for i in range(1,len(routes)):
        if tmp>routes[i][1]:
            tmp=routes[i][1]
        elif tmp<routes[i][0]: #범위를 넘는 값에서 다음 차가 출발 했다면 카메라 증가
            tmp=routes[i][1]
            answer+=1
    return answer