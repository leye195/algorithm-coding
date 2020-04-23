def solution(nums):
    return build(nums,0,len(nums)-1)
def build(nums,s,e):
    if s>e:
        return None
    if s==e:
        return nums[s]
    mid=(s+e)//2
    node=TreeNode(nums[mid])
    node.left=build(nums,s,mid-1)
    node.right=build(nums,mid+1,e)
    return node

def solution2(nums):
    if not nums:
        return None
    mid=len(nums)//2
    node=TreeNode(nums[mid])
    node.left=TreeNode(nums[:mid])
    node.right=TreeNode(nums[mid+1:])
    return node

'''
Given ListNode convert to Balanced BST
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
'''
def solution3(head):
    if not head:
        return None
    mid=findmid(head)
    node=TreeNode(mid.val)
    if node==head:
        return node
    node.left=solution3(mid.next)
    node.right=solution3(head)
    return node

def findmid(head):
    prev,slow,fast=None,head,head
    while fast and fast.next:
        prev=slow
        slow=slow.next
        fast=fast.next.next
    if prev:
        prev.next=None
    return slow

def solution4(head):
    if not head:
        return None
    nums=ListToVal(head)
    return convertToBST(nums,0,len(nums)-1)
def ListToVal(head):
    val=[]
    while head:
        val.append(head.val)
        head=head.next
    return val

def convertToBST(nums,s,e):
    if s>e:
        return None
    if s==e:
        return TreeNode(nums[s])
    mid=(s+e)//2
    node=TreeNode(nums[mid])
    node.left=convertToBST(nums,s,mid-1)
    node.right=convertToBST(nums,mid+1,e)
    return node