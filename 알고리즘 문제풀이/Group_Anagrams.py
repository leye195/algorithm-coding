import collections
def solution(strs):
    ans=collections.defaultdict(list)
    for s in strs:
        ans[tuple(sorted(s))].append(s)
    print(ans)
    return ans.values()
print(solution(["eat", "tea", "tan", "ate", "nat", "bat"]))