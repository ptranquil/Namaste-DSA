/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/description/
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let ans = dummy;
    let carry = 0;
    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0: l2.val) + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);
        dummy.next = newNode;
        dummy = dummy.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return ans.next;
};

/**
Approach:

- Need to throughly understand the problem statement before execution, its slightly tricky
- Need to understand the 'carry' & shouldn't get confused with the reverse part
 */