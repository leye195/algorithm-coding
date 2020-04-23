def solution(a,b):
    ans=int('0b'+a,2)+int('0b'+b,2)
    return bin(ans)[2:]
print(solution("11","1"))