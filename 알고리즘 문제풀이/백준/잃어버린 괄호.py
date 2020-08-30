# 1. - 가 나오기 전 까지는 모두 더해준다.
# 2. - 가 나온 이후는 모두 빼준다.
n = input()
answer,arr = 0,n.split("-")
for i in arr[0].split("+"):
    answer+=int(i)
for i in arr[1:]:
    for j in i.split("+"):
        answer-=int(j)
print(answer)