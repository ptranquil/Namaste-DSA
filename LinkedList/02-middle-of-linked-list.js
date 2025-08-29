/**
 * 876. Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 */

function middleNode(head){
    let slow = head;
    let fast = head;
    while(fast.next != null && fast != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

/**
 * Approach
 * 1. We make use of slow and fast pointer
 * 2. slow moves one node at a time and fast moves 2 nodes at a time
 * 3. with this approach the when the fast pointer is out of index or at the last index the slow pointer will be at the middle index
 * 4. Corner cases:
 *  i. fast != null : We need to move forward untill fast != null i.e. fast is out of list (even cases)
 *  ii. fast.next != null: we need to move forward until fast.next i.e the last element (odd cases)
 */