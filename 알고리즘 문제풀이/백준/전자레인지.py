T = int(input())
c1 = T//300
c2 = (T-(c1*300))//60
c3 = (T - c1*300 - c2*60)//10
if(T == (c1*300+c2*60+c3*10)):
    print(c1,c2,c3)
else:
    print(-1)

'''
time=[300,60,10]
cnt,idx = [0,0,0],0
T = int(input())
while idx<3:
    if T-time[idx]>=0:
        T-=time[idx]
        cnt[idx]+=1
    else:
        idx+=1
print(cnt)
if T==0:
    print(" ".join(map(str,cnt)))
else:
    print(-1)
'''