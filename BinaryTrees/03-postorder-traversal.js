/**
 * 145. Binary Tree Postorder Traversal
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 */

// Recussive Approach
var postorderTraversal = function(root) {
    let ans = []
    function traversal(curr){
        if(!curr) return;
        traversal(curr.left)
        traversal(curr.right)
        ans.push(curr.val);
    }
    traversal(root);
    return ans;
};

// Iterative Approach: Using 2 stack
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
var postorderTraversal = function(root) {
    if(!root) return [];

    const s1 = [root];
    const s2 = [];

    while(s1.length){
        let node = s1.pop();
        s2.push(node.val);
        if(node.left){
            s1.push(node.left)
        }
        if(node.right){
            s1.push(node.right)
        }
    }

    let ans = [];
    for(let i=s2.length-1;i>=0;i--){
        ans.push(s2[i])
    }

    return ans;

};

// using 1 stack
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
var postorderTraversal = function(root) {
    if(!root) return [];

    const stack = [];
    let curr = root;
    let LVN = null; // Last Visited Node. To handle edge case
    let ans = [];

    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }

        let peekNode = stack[stack.length-1]; // the top element of stack
        if(peekNode.right && (peekNode.right != LVN)){
            curr = peekNode.right;
        } else {
            ans.push(peekNode.val);
            LVN = peekNode;
            stack.pop();
        }
    }

    return ans;

};
