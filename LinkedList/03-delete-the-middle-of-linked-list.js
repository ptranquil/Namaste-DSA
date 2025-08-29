/**
 * 
 * 2095. Delete the Middle Node of a Linked List
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
 * Similar to the 876. Middle of the Linked List
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {

    // corner case: 0 or 1 node
    if(head == null || head.next == null) return null

    let slow = head;
    let fast = head;
    let prev = null;
    while(fast!= null && fast.next != null){
        prev = slow
        slow = slow.next;
        fast = fast.next.next
    }
    prev.next = slow.next;
    return head;
};

/**
 * For the corner case: Need to understand what to retun if the list have only 1 element as 
 * leetcode test cases got failed, if we return the same element as n/2 i.e. 1/2 = 0.5 which float to 0
 */