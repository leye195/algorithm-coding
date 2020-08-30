n = int(input())
line = list(map(int,input().split(" ")))
answer,wait_time,line = 0,0,sorted(line),
for i in range(0,n):
    wait_time+=line[i]
    answer+=wait_time
print(answer)