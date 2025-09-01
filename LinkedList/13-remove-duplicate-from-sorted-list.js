/**
 * 83. Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
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
 * 
 * 
 * Easiest problem, just skipping the values based on current node
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next
        }
    }
    return head
};