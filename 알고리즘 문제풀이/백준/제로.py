n = int(input())
st=[]
for i in range(n):
    m = int(input())
    if m>0:
        st.append(m)
    else:
        st.pop()
print(sum(st))
