#문자열 형식으로 숫자 number와 제거할 수의 개수 k
#len(number)-k : 나머지 숫자들
def solution(number, k):
    answer,length,idx = "",len(number)-k,0
    while length>0:
        tmp=""
        for i in range(idx,len(number)-length+1):
            if tmp<number[i]:
                tmp=number[i]
                idx=i
        answer+=tmp
        idx+=1
        length-=1
    return answer