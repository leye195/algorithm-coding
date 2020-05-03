#문자열은 항상 길이가 10을 넘지 않는 알파벳 소문자로만 구성된 문자열
#연산의 결과가 0보다 작거나 10보다 클 경우에는 무조건 오답
#알파벳의 문자의 수가 동일하고(여기서는 's' 1개, 'e' 2개, 'v' 1개 그리고 'n' 1개), 
#순서가 뒤섞여 있는 경우까지는 정답
#한 줄에 답이 올바르게 기재 되어 있으면 “Yes”를, 그렇지 않을 경우에는 “No”
def sorted_str(n):
    return ''.join(sorted(n))
def solution(a,b,c,op):
    d={
        "eorz":0,
        "eno":1,
        "otw":2,
        "eehrt":3,
        "foru":4,
        "efiv":5,
        "isx":6,
        "eensv":7,
        "eghit":8,
        "einn":9,
        "ent":10
    }
    n1=d[sorted_str(a)]
    n2=d[sorted_str(b)]
    r=eval(str(n1)+op+str(n2))
    if(r>10 or r<0):
        return "No"
    elif(sorted_str(c) in d.keys() and r==d[sorted_str(c)]):
        return "Yes"
    else:
        return "No"
n=int(input())
for i in range(0,n):
    s=str(input()).split(" ")
    a,b,c,op=s[0],s[2],s[4],s[1]
    print(solution(a,b,c,op))
