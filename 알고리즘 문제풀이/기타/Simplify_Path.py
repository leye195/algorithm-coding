def solution(path):
    pli=[p for p in path.split("/") if p]
    stack=[]
    for p in pli:
        if p=='..':
            if len(stack)>0:
                stack.pop()
        elif p!='.':
            stack.append(p)
    return '/'+'/'.join(stack)
print(solution("/home/"))
print(solution("/../"))
