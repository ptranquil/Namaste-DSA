/**

LC: 234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/description/

TC: O(N + N/2)
SC: O(N)
 */
var isPalindrome = function(head) {
    // 1st approach: Store element in array and check for palindrome

    let curr = head;
    let arr = []
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }

    let N = arr.length;
    let left=0;
    let right = N-1
    while(left < right){
        if(arr[left] != arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

/**
 * TC: O(N/2 + N/2 + N/2)
 * SC: O(1)
 */
var isPalindromeOptimize = function(head) {
    // 2nd approach using reverse logic from the middle and comparing the linkedlist using 2 pointers

    // Finding the mid
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the LL from middle;
    let prev = null;
    let curr = slow;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    // Start from both end and compare the values
    let firstList = head;
    let secondList = prev; // as second list will have previous at the end which will point to the start of the linked list
    while(secondList){
        if(firstList.val != secondList.val){``
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};