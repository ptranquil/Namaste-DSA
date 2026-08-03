/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 */

// LCA using LCA of Binart tree logic
var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    function findLCA(curr){
        if(!curr) return 0;
        let count = 0;

        let countOnLeft = findLCA(curr.left);
        let countOnRight = findLCA(curr.right);

        if(curr == p || curr == q){
            count++
        }

        count = count + countOnLeft + countOnRight;
        if(count === 2 && !lca){
            lca = curr;
        }
        return count;
    }
    findLCA(root);
    return lca;
};



var lowestCommonAncestor = function(root, p, q) {
    if(!root) return root;
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q)
    } else if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root;
    }
};