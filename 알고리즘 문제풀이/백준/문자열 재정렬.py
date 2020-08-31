#알파벳 대문자와 숫자(0~9)로 구성된 문자열을 입력
#모든 알파벳을 오름차운으로 정렬해 출력한 뒤, 뒤에 모든 숫자를 더한 값을 출력
#input: K1KA5CB7
#output: ABCKK13
#input: AJKDLSI412K4JSJ9D
#output: ADDIJJJKKLSS20
s = input()
answer,alpha,num ="",[],0
for ch in s:
    if ord(ch)>=65 and ord(ch)<=90:
        alpha.append(ch)
    else:
        num+=int(ch)
alpha = sorted(alpha)
if(num>0):
   alpha.append(str(num))
print("".join(alpha))



