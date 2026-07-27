/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 */

// TOP DOWN RECUSSION
var maxDepth = function(root) {
    if(!root) return 0;

    let level = 0;
    let maxLevel = 0;

    function traversal(curr, level){
        maxLevel = Math.max(level, maxLevel);
        curr.left && traversal(curr.left, level+1);
        curr.right && traversal(curr.right, level+1);
    }
    traversal(root, 1);
    return maxLevel;
};


// BOTTOM UP RECUSSION
var maxDepth = function(root) {
    if(!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax,rightMax);
};



