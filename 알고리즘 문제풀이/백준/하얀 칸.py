import sys

input = sys.stdin.readline
lines=[]
answer,t = 0,False
for i in range(8):
    line = [ch for ch in input()]
    #0:white, 1:black
    if i%2==0:
        t = False
    else:
        t = True
    for j in line:
        if j=="F" and t==False:
            answer+=1
        t = not t
print(answer)