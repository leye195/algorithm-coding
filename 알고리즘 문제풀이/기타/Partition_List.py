class ListNode:
    def __init__(self,x):
        self.val=x
        self.next=None

def solution(head,x):
    h,tmp=head,ListNode(-1)
    ans=tmp
    while(h!=None):
        if(h.val<x):
            tmp.next=ListNode(h.val)
            tmp=tmp.next
        h=h.next
    h=head
    while(h!=None):
        if(h.val>=x):
            tmp.next=ListNode(h.val)
            tmp=tmp.next
        h=h.next
    return ans

def solution2(head,x):
    ls_tmp=ListNode(-1)
    gr_tmp=ListNode(-1)
    ls,gr=ls_tmp,gr_tmp
    cur=head
    while cur:
        if cur.val<x:
            ls.next=cur
            ls=ls.next
        else:
            gr.next=cur
            gr=gr.next
        cur=cur.next
    gr.next=None
    ln.next=gr_tmp.next
    return ls_tmp.next
            