/**
 * 142. Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 */

// TC: O(n)
// SC: O(n)
var detectCycleUsingHash = function(head) {

    if(head ==null || head.next == null) return null;

    let visited = new Set();
    let curr = head;

    while (curr !== null) {
        if (visited.has(curr)) {
            return curr;
        }
        visited.add(curr);
        curr = curr.next;
    }

    return null;
};

/**
 * TC: O(N)
 * SC: O(1)
 */
var detectCycle = function(head) {
    // Tortoise & hare approach
    // Slow and fast pointer

    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        // loop detected
        if(slow == fast){
            slow = head;
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null
};