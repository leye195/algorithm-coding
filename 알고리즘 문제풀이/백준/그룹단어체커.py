#그룹 단어 체커 문제 링크: https://www.acmicpc.net/problem/1316
import sys
input = sys.stdin.readline
n = int(input())
result = 0
for i in range(n):
    s = input().strip()
    st,cnt,flag=0,0,True
    alpha = [0 for i in range(26)] 
    while st <len(s):
        for en in range(st,len(s)+1):
            if en<len(s) and s[st]==s[en]:
                cnt+=1
            else:
              
                if alpha[ord(s[st])-ord("a")]==0:
                    alpha[ord(s[st])-ord("a")] = cnt
                else:
                    flag = False
                st=en
                cnt=0
                break
        if flag==False:
            break
    if flag:
        result+=1   
print(result)