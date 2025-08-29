/**
92. Reverse Linked List II
https://leetcode.com/problems/reverse-linked-list-ii/

 */
var reverseBetween = function(head, left, right) {
    // Using dummy for the corner cases
    // as if we need to reverse from the first node then there will be no track of the prev
    let dummy = new ListNode(0);
    dummy.next = head;

    leftPrev = dummy;
    curr = head;

    // Coming to the left node and assigning the prev node to left to leftPrev
    // leftPrev will be used to keep track
    for(let i=0;i<left-1;i++){
        leftPrev = curr;
        curr = curr.next;
    }

    // Reversing the node from left to right
    // at the end, the curr will point to 5 and the prev to 4
    let prev = null
    for(let i=0;i<right-left+1;i++){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // leftPrev is 1 Node so 1.next is 2 and 2.next will point to curr i.e. 5
    // leftPrev is 1 Node so 1 will point to prev i.e. 4
    leftPrev.next.next = curr;
    leftPrev.next = prev;

    return dummy.next;
};

/**
Approach
1. Keep track of the left-1 node which will be use for referencing at the end
2. Reverse the list from left to right using the reverse logic
3. point the start and end
4. Catch: Using the dummy list for the corner cases and making the thing easy to keep track of the lastPreviou Node
 */