/**
 * 61. Rotate List
 * https://leetcode.com/problems/rotate-list/description/
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // O(2N) & SC: O(1)

    // find the lenght of the list
    let N = 0;
    let curr = head;
    while(curr){
        curr = curr.next;
        N+=1;
    }

    k = k%N;
    if(k == 0) return head;
    if(!head) return null;


    let steps = N - k;
    let start = curr = head;
    for(let i=0;i<steps-1;i++){
        curr = curr.next;
    }

    let startHead = temp = curr.next;
    curr.next = null;
    let prev = null
    while(temp){
        prev = temp;
        temp = temp.next;
    }
    prev.next = start;
    return startHead;
};