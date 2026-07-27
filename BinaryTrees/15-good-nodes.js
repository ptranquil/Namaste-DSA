/**
 * 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 */

var goodNodes = function(root) {
    let totalGoodNodes = 0;

    function findGoodNode(curr, maxValSoFar){
        if (!curr) return;
        if(curr.val >= maxValSoFar){
            maxValSoFar = curr.val;
            totalGoodNodes++;
        }
        findGoodNode(curr.left, maxValSoFar);
        findGoodNode(curr.right, maxValSoFar);
    }
    findGoodNode(root, -Infinity);
    return totalGoodNodes;
};