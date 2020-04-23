def solution(skill,skill_trees):
    answer=0
    for tree in skill_trees:
        mine,idx=[],0
        for t in tree:
            if t not in skill:
                mine.append(t)
            elif t in skill:
                if skill[idx]!=t:
                    break
                else:
                    mine.append(skill[idx])
                    idx+=1
        if len(mine)==len(tree):
            answer+=1
    return answer