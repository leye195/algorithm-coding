'''
00
01
11
10
if n==0 return [0]

'''
def solution1(n):
    if n==0:
        return [0]
    else:
        res=[]
        for i in range(0,2**n):
            res.append((i>>1)^i)
        print(res)
        return res

'''
n=2
00,01,10,11
n=3
000,001,010,011
100,101,110,111
'''

def solution2(n):
    if n==0:
        return [0]
    r=[0,1]
    for i in range(2,n+1):
        t=[]
        for item in r:
            t.append('0'+item)
        for item in r[::-1]
            t.append('1'+item)
        r=t
    return [int(item,2) for item in r]

