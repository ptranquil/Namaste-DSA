/**
 * 328. Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/description/
 * 
 *  Approach: Store the odd node in odd arr & even node in even arr
 * TC: O(n) + O(odd-element) + O(even-element) ==== O(2n)
 * SC: O(odd-element) + O(even-element) ==== O(n)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let curr = head;
    let odd = []
    let even = []

    // storing odd & even in array
    let count=1;
    while(curr){
        if(count%2 != 0){
            odd.push(curr.val);
        } else {
            even.push(curr.val)
        }
        count++;
        curr = curr.next;
    }

    // loop over odd array an put element in list
    curr = head;
    for(i=0;i<odd.length;i++){
        curr.val = odd[i];
        curr = curr.next;
    }

    for(i=0;i<even.length;i++){
        curr.val = even[i];
        curr = curr.next;
    }

    return head;
};