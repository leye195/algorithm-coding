def validate_bst(root):
    return solution(root)

def solution(root,lower=float('-inf'),upper=float('inf')):
    if not root:
        return True
    val=root.val
    if val<=lower or val>=upper:
        return False
    if not solution(root.right,val,upper):
        return False
    if not solution(root.left,lower,val):
        return False
    return True
def solution2(root):
    if not root:
        return True
    stack=[(root,float('-inf'),float('inf'))]
    while stack:
        root,lower,upper=stack.pop()
        if not root:
            continue
        val=root.val
        if val<=lower or val>=upper:
            return False
        stack.append((root.right,val,upper))
        stack.append((root.left,lower,val))
    return True