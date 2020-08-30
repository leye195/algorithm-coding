#문제 링크 https://www.acmicpc.net/problem/9461
w_dp,b_dp,flag=[1,2,3,5,9],[1,1,2,4,7],True
dp=[0,1,1,1,2,2,3,4,5,7,9]
for i in range(10,100):
    if(flag):
        num = w_dp[-1]+w_dp[-3]
        b_dp.append(num)
        dp.append(num)
        flag = False
    else:
        num = b_dp[-1]+b_dp[-3]
        w_dp.append(num)
        dp.append(num)
        flag = True
t = int(input())
for i in range(t):
    n = int(input())
    print(dp[n])