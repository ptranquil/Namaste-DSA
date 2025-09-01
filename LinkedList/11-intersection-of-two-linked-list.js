/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
160. Intersection of Two Linked Lists
https://leetcode.com/problems/intersection-of-two-linked-lists/description/

BruteForce: Loop for each element of headA in headB. TC: O(n2), SC: O(1)

SC: O(n)
TC: O(n) because looping over element in headA and for headB as we are storing it in set. It has TC of O(1) for searching
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let curr = headA;
    while(curr){
        set.add(curr);  
        curr = curr.next;
    }

    let temp = headB;
    while(temp){
        if(set.has(temp)){
            return temp;
        }
        temp = temp.next;
    }
    return null;
};