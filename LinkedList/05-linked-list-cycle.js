/**
 * LC: 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/description/
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * TC: O(n)
 * SC: O(n)
 */
var hasCycle = function(head) {
    let set = new Set();
    let curr = head;
    while(curr){
        if(set.has(curr)){
            return true
        }
        set.add(curr)
        curr = curr.next;
    }
    return false;
};

/**
 * Approach: Make use of set and check if the element exist return true
 * Corner cases: why not store the node with hash {}
 *      - JavaScript will implicitly convert the head object (your node) into a string — by default it becomes "[object Object]".
 *      - That means every node reference will map to the same key, and your hash map won’t actually distinguish between different nodes.So with plain {}, you can’t reliably store objects as keys.
 */


// Another optimize approach with TC: O(n) & SC: O(1)

var hasCycle = function(head) {
    // Using slow and fast pointer
    // Floyd's Cycle Detection Algorithm
    let slow = head;
    let fast = head;
    while(fast!=null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
};

// Here if cycle exist then at some point of time the slow and fast pointer will point to the same node
// if not the loop will break when fast meets null