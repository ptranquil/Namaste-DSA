/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 */


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Approach 1: Using 2 pointers and checking the rest values, used array logic
var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;

    let dummy = new ListNode(0);
    let ans = dummy;

    while(p1 && p2){
        if(p1.val < p2.val){
            dummy.next = new ListNode(p1.val);
            p1 = p1.next;
        } else {
            dummy.next = new ListNode(p2.val);
            p2 = p2.next;
        }
        dummy = dummy.next;
    }

    while(p1){
        dummy.next = new ListNode(p1.val);
        dummy = dummy.next;
        p1 = p1.next;
    }

    while(p2){
        dummy.next = new ListNode(p2.val);
        dummy = dummy.next;
        p2 = p2.next;
    }

    return ans.next;
};

// Optimal Approach
var mergeTwoLists = function(list1, list2) {
    // another approach with O(N) SC

    if(!list1) return list2;
    if(!list2) return list1;

    // find the node from which we need to start
    let l1 = list1;
    let l2 = list2;
    let curr = null;

    if(l1.val < l2.val){
        curr = l1;
        l1 = l1.next;
    } else {
        curr = l2;
        l2 = l2.next;
    }
    let startHead = curr;

    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if(!l1){
        curr.next = l2;
    } 
    if(!l2){
        curr.next = l1;
    }

    return startHead;
};