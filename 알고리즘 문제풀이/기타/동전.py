"""
주머니 마다 동전 갯수가 다름, 주머니 마다 동전 개수 같게 하려면 최소 몇개의 동전을 옮겨야 될까?
ex)
50 50 20 7   평균 31개
if pocket[i]<average:
    num_cnt+=average-pocket[i]
elif total_cnt%pockets>pockets:
    num_cnt=-1
"""
def solution(n,pockets):
    total,m,r=0,len(pockets),0
    for i in pockets:
        total+=i
    a=total//m
    if (total%m)>m:
        r=-1
    else:
        for i in pockets:
            if i<a:
                r+=(a-i)
    print(r)
solution(4,[50,50,20,7])
solution(5,[1,1,1,1,6])
solution(3,[5,1])