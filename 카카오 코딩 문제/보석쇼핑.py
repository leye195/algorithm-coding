def solution(gems):
    gem_sets,m,q,l,st,st_point = list(set(gems)),{},[],100001,0,0
    for gem in gems:
        if gem not in m:
            m[gem]=1
        else:
            m[gem]+=1
        q.append(gem)
        while(True):
            tmp = q[0]
            if(m[tmp]>1):
                m[tmp]-=1
                q.pop(0)
                st_point+=1
            else:
                break
        if(len(m.items())==len(gem_sets) and l>len(q)):
            l = len(q)
            st = st_point
    return [st+1,st + l]

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
solution(["AA", "AB", "AC", "AA", "AC"])
solution(["XYZ", "XYZ", "XYZ"])
solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])
solution(["A"])
solution(["A","B","C"])
solution(["A","V","A"])