import sys
input = sys.stdin.readline

n =  [int(i) for i in list(input().strip())]
cnt1,cnt2 =[0]*10,0
for i in n:
    if i!=6 and i!=9:
        cnt1[i]+=1
    else:
        cnt2+=1
print(max(max(cnt1),(cnt2+1)//2))