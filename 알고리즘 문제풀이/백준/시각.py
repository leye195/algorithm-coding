#00:00:00 ~ n:59:59
n = int(input())
answer = 0
for i in range(n+1):
    for j in range(0,60):
        for k in range(0,60):
            if "3" in str(i)+str(j)+str(k):
                answer+=1
print(answer)


