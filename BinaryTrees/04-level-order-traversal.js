/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 */

// Iterative Approach
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let queue = [root];
    let res =[];
    while(queue.length){
        let level = [];
        let levelSize = queue.length;

        while(levelSize > 0){
            let curr = queue.shift();
            level.push(curr.val) 
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
            levelSize--
        }
        res.push(level);
    }
    return res;
};



// Rcurssive Approach
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let ans = [];
    function traversal(curr, level){
        if(!curr) return;
        if(!ans[level]) ans[level] = [];

        ans[level].push(curr.val);
        traversal(curr.left, level+1);
        traversal(curr.right, level+1);
    }
    traversal(root, 0);
    return ans;
};