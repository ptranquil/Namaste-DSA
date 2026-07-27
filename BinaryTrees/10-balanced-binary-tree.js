/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/description/
 */
var isBalanced = function(root) {
    let ans = true;
    function calculateHeight(curr){
        if(!curr) return 0;
        let leftHeight = calculateHeight(curr.left);
        let rightHeight = calculateHeight(curr.right);

        if(Math.abs(leftHeight-rightHeight) > 1){
            ans = ans && false;
        }

        return 1 + Math.max(leftHeight, rightHeight)
    }
    calculateHeight(root);
    return ans;
};