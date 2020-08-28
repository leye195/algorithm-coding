#이분 탐색을 활용한 최대 인원 값 도출
#이분탐색은 원소의 위치를 찾는대만 쓰이는것이 아닌 최대 실행 홧수를 찾는데에도 쓰일수 있다.
#ex) le: 실행횟수가 될 수 있는 최소값, ri: 실행횟수가 될 수 있는 최댓값
def solution(stones,k):
    le,ri = 0,200000000
    while(le<=ri):
        mid,cnt = (le+ri)//2,0
        for i in range(len(stones)):
            if(stones[i] - mid<=0):
                cnt+=1
            else:
                cnt=0
            if cnt >=k: #k번 연속으로 건널수 없다면 
                break
        if(cnt>=k):
            ri = mid-1
        else:
            le = mid+1
    return le
solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1]	,3)
