def solution(nums):
    if not nums:
        return []
    res,tmp_list=[[]],[[]]
    for item in nums:
        tmp_list+=[[item]+tmp for tmp in res]
    for item in tmp_list:
        if sorted(item) not in res:
            res.append(sorted(item))
    return res