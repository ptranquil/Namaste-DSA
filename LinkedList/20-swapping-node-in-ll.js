/**
 * 1721. Swapping Nodes in a Linked List
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/
 */

// Approach 1: TC: O(3n), SC: O(1)
var swapNodes = function(head, k) {
    if(!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = head;
    let N = 0;
    while(curr){
        N+=1;
        curr = curr.next;
    }

    let fVal = sVal = 0;
    let sI = N-k+1

    if(k == sI) return dummy.next;

    curr = head;
    for(let i=1;i<=N;i++){
        if(i==k){
            fVal = curr.val
        }

        if(i==sI){
            sVal = curr.val
        }
        curr = curr.next;
    }

    curr = head;
    let index = 1;
    while(curr){
        if(index == k){
            curr.val = sVal;
        }
        if(index == sI){
            curr.val = fVal;

        }
        curr = curr.next;
        index+=1;
    }
    return dummy.next;
};

// Another approach using slow and fast pointer
var swapNodes = function(head, k) {
    let fast = head;
    let kJump = k
    while(kJump > 1){
        fast = fast.next;
        kJump--;
    }

    let firstNode = fast;

    let slow = head;
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    let temp = slow.val;
    slow.val = firstNode.val;
    firstNode.val = temp;

    return head;
};