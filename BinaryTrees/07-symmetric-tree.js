/**
 * 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/description/
 */

// Recursive Approach
var isSymmetric = function(root) {

    function isMirror(left, right){
        // handling the leaf node
        if(!left && !right) return true;

        //handling cases where either of 1 are present
        if(!left || !right) return false;
    
        return left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
    }
    return isMirror(root.left, root.right)
};


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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true;

    //handling cases where either of 1 are present
    if(!root.left || !root.right) return false;

    let q = [root.left, root.right];
    while(q.length){
        let A = q.shift();
        let B = q.shift();

        // If both are null continue
        if(A == null && B === null) continue;

        // If any one of them is null return false
        if(A == null || B === null) return false;

        if(A.val != B.val) return false;

        q.push(A.left, B.right);
        q.push(A.right, B.left);
    }
    return true;
};



