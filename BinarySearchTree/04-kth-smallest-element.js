/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 */


var kthSmallest = function(root, k) {
    let count = 1;
    let ans = null;
    function inOrderTraversal(curr){
        if(!curr) return;
        inOrderTraversal(curr.left);
        if(count == k){
            ans = curr.val
        }
        count++;
        inOrderTraversal(curr.right);
    }
    inOrderTraversal(root);
    return ans;
};