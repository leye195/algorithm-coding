#제1회 코드 페스티벌 본선에 진출하여 a등(1 ≤ a ≤ 100)등을 하였다. 단, 진출하지 못했다면 a = 0으로 둔다.
#제2회 코드 페스티벌 본선에 진출하여 b등(1 ≤ b ≤ 64)등을 할 것이다. 단, 진출하지 못했다면 b = 0으로 둔다.
# 1<=a<=100
# 1<=b<=64
first_festival=[]
p1=[500,300,200,50,30,10]
second_festival=[]
p2=[512,256,128,64,32]

def getPrize(a,b):
    t=0
    if(a!=0):
        t+=first_festival[a-1]
    if(b!=0):
        t+=second_festival[b-1]
    print(t*10000)

for i in range(1,7):
    for j in range(0,i):
        first_festival.append(p1[i-1])
for i in range(1,6):
    for j in range(0,2**(i-1)):
        second_festival.append(p2[i-1])
getPrize(18,18)

