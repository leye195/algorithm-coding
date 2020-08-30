n,k = map(int,input().split(" "))
coins,answer,idx = [],0,n-1
for i in range(0,n):
    coins.append(int(input()))
while(len(coins)):
    coin = coins.pop()
    if(k>=coin):
        answer+=k//coin
        k=k%coin
print(answer)

    
