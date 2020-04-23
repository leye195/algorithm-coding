# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def inorderTraversal(self, root)
        res=[]
        self.inOrder(root,res)
        return res
        
    def inOrder(self,root,res):
        if root!=None:
            self.inOrder(root.left,res)
            res.append(root.val)
            self.inOrder(root.right,res)
        