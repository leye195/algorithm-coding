from math import log
def get_degit(number,d,base=10):
    return (number//base**d)%base

def countingSort_with_digit(a,d,base=10):
    k=base-1
    b=[-1]*len(a)
    c=[0]*(k+1)
    
    for i in a:
        c[get_degit(i,d,base)]+=1
    for i in range(k):
        c[i+1]+=c[i]
    for j in reversed(range(len(a))):
        b[c[get_degit(a[j],d,base)]-1]=a[j]
        c[get_degit(a[j],d,base)]-=1
    return b

def radix_sort(li,base=10):
    digit=int(log(max(li),base)+1)
    for d in range(digit):
        li=countingSort_with_digit(li,d,base)
    return li