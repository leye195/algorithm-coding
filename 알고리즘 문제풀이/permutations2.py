import itertools

def solution(nums):
    return list(set(itertools.permutations(nums)))

