/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */
// Definition for singly-linked list

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases easily
    let dummy = new ListNode(0);
    dummy.next = head;

    // First pass: find the length of the list
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // Second pass: find the (length - n)-th node
    length -= n;
    current = dummy;
    while (length > 0) {
        length--;
        current = current.next;
    }

    // Remove the target node
    current.next = current.next.next;
    return dummy.next; // Return new head
};


let head = createLinkedList([1,2,3,4,5]); 
let newHead = removeNthFromEnd(head, 2);
console.log(linkedListToArray(newHead)); 