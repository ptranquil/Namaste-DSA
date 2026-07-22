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



// Iterative but more simpler
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    while(prev.next && prev.next.next){
        let first = prev.next;
        let second = first.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
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