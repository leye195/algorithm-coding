#한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다
#회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다
#1.회의 끝나는 시간을 기준으로 오름차순으로 정렬, 끝나는 시간이 같은 경우 시작 시간에 대해서 오름차순 정렬
#2.회의 끝난뒤 시작할 수 있는 다음 회의 시작
n = int(input())
arr,answer=[],0
for i in range(n):
    arr.append(list(map(int,input().split(" "))))
arr = sorted(arr,key=lambda x: (x[1],x[0]))
cur = 0
for i in range(0,len(arr)):
    if(cur<=arr[i][0]):
        cur = arr[i][1]
        answer+=1
print(answer)