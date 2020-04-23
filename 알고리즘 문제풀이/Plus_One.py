def solution(digits):
    idx=len(digits)-1
    r=digits[idx]
    if(r+1>=10):
        digits[idx]=0
        add=1
        for i in range(idx-1,-1,-1):
            digits[i]=digits[i]+add
            if(digits[i]>=10):
                digits[i]=0
                add=1
            else:
                add=0
        if add==1:
            digits.insert(0,1)
    else:
        digits[idx]+=1
    return digits