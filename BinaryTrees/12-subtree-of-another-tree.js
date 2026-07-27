/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 */

/**
 * 
 * Approach is 
 * 1. check whether the given tree is same by using sameTree logic
 * 2. if not check for the left subtree and right subtree
 * 3. if any one of them is same return true
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;

    function isSameTree(p,q){
        if(!p && !q) return true;
        if(!p || !q) return false;

        return p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);
    }

    // check if same tree
    if(isSameTree(root, subRoot)){
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};