/**
 * 24. Swap Nodes in Pairs
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
*/
// Iterative approach
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    let curr = head;
    let next = head.next;
    while(curr && curr.next && next){
        curr.next = curr.next.next;
        next.next = curr;
        prev.next = next;
        prev=curr;
        curr = curr.next;
        next = curr && curr.next;
    }
    return dummy.next;
};

// Recursive approach
var swapPairs = function(head) {
    // Recursive approach

    if(!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;
    return r
};
/**
Approach:
    1. considering the first two nodes and swapping it
    2. for the rest node, getting it value using ietrative approach
 */