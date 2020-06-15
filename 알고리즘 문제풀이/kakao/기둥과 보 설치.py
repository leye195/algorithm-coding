'''
1.기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
2.보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.

x,y: 설치 좌표 or 교차 좌표
kind: 0=>기동 1=>보
how: 0=>삭제 1=>설치 
'''
def check(frame):
    for x,y,kind in frame:
        if kind==0: #기둥, 기둥 배치 규치에 맞는지 확인
            if y==0 or [x,y-1,0] in frame or [x,y-1,1] in frame or [x,y,1] in frame:
                continue
            else:
                return False
        elif kind==1: #보, 보 배치 규치에 맞는지 확인
            if [x,y-1,0] in frame or [x+1,y-1,0] in frame or[x-1,y,0] in frame and [x+1,y,0] in frame:
                continue
            else:
                return False
    return True
def solution(build_frames):
    answer = []
    for frame in build_frames:
        x,y,kind,how = frame
        if how == 1:
            answer.append([x,y,kind])
            if(check(answer)==False):
                answer.remove([x,y,kind])
        else:
            if [x,y,kind] in answer:
                answer.remove([x,y,kind])
                if(check(answer)==False):
                    answer.append([x,y,kind])
    answer = sorted(answer,key=lambda x: (x[0],x[1],x[2]])
    return answer
