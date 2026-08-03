/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 */
var isValidBST = function(root) {
    let ans = true;
    function isBST(curr, lower, higher){
        if(!curr) return true;

        if((lower!=null && curr.val <= lower) || (higher!=null && curr.val >= higher)){
            ans = ans && false;
        }

        isLeftBST = isBST(curr.left, lower, curr.val);
        isRightBST = isBST(curr.right, curr.val, higher);

        return isLeftBST && isRightBST;
    }
    isBST(root,null,null);
    return ans;
};