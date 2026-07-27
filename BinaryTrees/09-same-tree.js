/**
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree/
 */
var isSameTree = function(p, q) {
    let ans = true;

    function checkSimilarity(p,q){
        if(!p && !q) return;
        if((!p || !q) || p.val != q.val){
            ans = false;
            return;
        }
        checkSimilarity(p.left, q.left);
        checkSimilarity(p.right, q.right);
    }
    checkSimilarity(p,q);
    return ans;
};


// another similar approach without using a variable
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right);
};