/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    function traverse(curr){
        let count = 0;
        if(!curr) return 0;
        let ansOnLeft = traverse(curr.left);
        let ansOnRight = traverse(curr.right);
        
        if(curr === p || curr === q) count++;
        count = count + ansOnLeft + ansOnRight;
        if(count === 2 && !lca) {
            lca = curr;
        }
        return count;
    }
    traverse(root);
    return lca;
};

// Another soln same recursive approach but without count
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    if(root === null || root == p || root === q){
        return root;
    }
    
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(left === null){
        return right;
    } else if (right === null){
        return left;
    } else {
        return root;
    }
};

// same abov approach but a little easy way to write
var lowestCommonAncestor = function(root, p, q) {

    // Base case
    if (!root || root === p || root === q) {
        return root;
    }

    // Search both sides
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // p and q found on opposite sides
    if (left && right) {
        return root;
    }

    // Pass the result upward
    return left || right;
};