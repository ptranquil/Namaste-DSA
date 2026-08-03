/**
 * 700. Search in a Binary Search Tree
 * https://leetcode.com/problems/search-in-a-binary-search-tree/description/
 */

var searchBST = function(root, val) {

    if(!root) return root;
    if(root.val === val) return root;

    if(val < root.val){
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
};