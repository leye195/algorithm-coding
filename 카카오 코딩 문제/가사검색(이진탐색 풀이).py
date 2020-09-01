from bisect import bisect_left,bisect_right

# 모든 단어들을 길이마다 나누어서 저장하기 위한 리스트
array = [[] for _ in range(10001)]
# 모든 단어들을 길이마다 나누어서 뒤집어 저장하기 위한 리스트
reversed_array = [[] for _ in range(10001)]
def solution(words,queries):
    answer=[]
    for word in words:
        array[len(word)].append(word)
        reversed_array[len(word)].append(word[::-1])
    for i in range(10001):
        array[i].sort()
        reversed_array[i].sort()
    for q in queries:
        tmp = 0
        if q[0]!="?":
            le,ri = bisect_left(array[len(q)],q.replace("?","a")),bisect_right(array[len(q)],q.replace("?","z"))
            tmp = ri-le
        elif q[-1]!="?":
            le,ri = bisect_left(reversed_array[len(q)],q[::-1].replace("?","a")),bisect_right(reversed_array[len(q)],q[::-1].replace("?","z"))
            tmp = ri-le
        answer.append(tmp)
    return answer