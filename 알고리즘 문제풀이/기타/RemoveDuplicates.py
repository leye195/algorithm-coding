class ListNode:
    def __init__(self,x):
        self.val=x
        self.next=None
def solution(head):
    h,d=head,ListNode(-1)
    flag,ans=False,d
    while(h!=None):
        while(h.next!=None and h.val==h.next.val):
            h=h.next
            flag=True
        if(flag):
            flag=False
        else:
            d.next=ListNode(h.val)
            d=d.next
        h=h.next
    return ans

def deleteDuplicates(head):
    if not head:
        return head
    h,tmp=head,ListNode(-1)
    ans=tmp
    while(h.next!=None):
        if(h.val!=h.next.val):
            tmp.next=ListNode(h.val)
            tmp=tmp.next
        h=h.next
    tmp.next=ListNode(h.val)
    return ans.next