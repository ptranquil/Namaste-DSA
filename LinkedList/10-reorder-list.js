/**
143. Reorder List
https://leetcode.com/problems/reorder-list/description/
 */

// Brute Force with O(1) SC, Using Array
var reorderList = function(head) {
    let curr = head;
    let arr = []
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }

    let N = arr.length;
    let left=0;
    let right = N-1;
    curr = head;
    while(left < right){
        curr.val = arr[left];
        curr = curr.next;
        curr.val = arr[right];
        curr=curr.next;
        left++;
        right--;

        // corne case as for the last element if we dont do this it will replace it value with previous value which already exist
        if(left == right){
            curr.val = arr[left];
            break;
        }
    }
    return head;
};

// Optimize 
var reorderList2 = function(head) {
    // Optimize approach

    // find the mid
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow.next;
    slow.next = null; // break the list into two halves
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let first = head; // first half of LL
    let second = prev;  // second half of LL
    while(second){
       temp1 = first.next;
       temp2 = second.next;
       first.next = second;
       second.next = temp1;
       first = temp1;
       second = temp2;
    }
};