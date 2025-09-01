/**
 * 82. Remove Duplicates from Sorted List II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;
    while(curr){
        if(curr.next && (curr.val === curr.next.val)){
            let val = curr.val;
            // skip all nodes with this value
            while(curr && curr.val == val){
                curr = curr.next
            }
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return dummy.next;
};