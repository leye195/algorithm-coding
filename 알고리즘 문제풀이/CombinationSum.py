    
def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
    res=[]
    def backtrack(target,n_set,idx):
        if sum(n_set)==target:
            res.append([ele for ele in n_set])
            return
        elif sum(n_set)<target and idx<len(candidates):
            n_set.append(candidates[idx])
            backtrack(target,n_set,idx)
            n_set.pop()
            backtrack(target,n_set,idx+1)
    backtrack(target,[],0)
    return res