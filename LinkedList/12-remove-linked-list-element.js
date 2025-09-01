/**
 * LC : 203. Remove Linked List Elements
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 * 
 * Whenever there is a delete operation in LL, always think about the sentinel node
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    let sentinel = new ListNode(); // dummy node
    sentinel.next = head;

    let prev = sentinel; // prev pointing to the dummy node which points to head; i.e. sentinel.next
    while(prev && prev.next){
        if(prev.next.val == val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    // returnin sentinel.next as the sentnel is pointing to head, in case head is not first element,
    // otherwise sentinel.next will always point to the next element
    return sentinel.next;
};