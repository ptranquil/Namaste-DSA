/**
 * LC: 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/description/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    prev = null;
    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head;
};

/**
 * Approach:
 * point the curr node to the previous one by maintaing the previous pointer and the next pointer
 */