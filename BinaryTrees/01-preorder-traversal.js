/**
 * 144. Binary Tree Preorder Traversal
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recurssive Approach
var preorderTraversal = function(root) {
    let ans = [];
    travesal(root);
    return ans;

    function travesal(curr){
        if(!curr) return;
        ans.push(curr.val);
        travesal(curr.left);
        travesal(curr.right);
    }
};


// Iterative Approach
var preorderTraversal = function(root) {

    let ans = [];
    if(!root) return ans;

    let stack = [];
    stack.push(root);
    while(stack.length){
        let curr = stack.pop();
        ans.push(curr.val);

        if(curr.right){
            stack.push(curr.right);
        }
        if(curr.left){
            stack.push(curr.left);
        }
    }
    return ans;
};