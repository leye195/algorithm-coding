# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
def rotateRight(head,k):
    li=[]
    h=head
    while(h!=None):
        li.append(h.val)
        h=h.next
    print(li)
    r_li=[0 for i in range(len(li))]
    for i in range(len(li)):
        r_li[(i+k)%len(li)]=li[i]
    print(r_li)
    h=head
    idx=0
    while(h!=None):
        h.val=r_li[idx]
        idx+=1
        h=h.next
    return head

def rotateRight2(head,k):
    if not head:
        return head
    cur=head
    len=0
    for i in range(k):
        if cur.next:
            cur=cur.next
        else:
            len=i+1
            break
        if len>0:
            mod=k%len
            if mod==0:
                return head
            cur=head
            for i in range(mod):
                cur=cur.next
        prev=head
        while cur.next:
            cur=cur.next
            prev=prev.next
        cur.next=head
        head=prev.next
        prev.next=None
        return head
    