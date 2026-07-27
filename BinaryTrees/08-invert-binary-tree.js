/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/description/
 */


// Recursive Approach
var invertTree = function(root) {
    if(!root) return root;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

// NOTE : We dont need to interchange the value need to change the pointers