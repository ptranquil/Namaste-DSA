/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let ans = [];
    let queue = [root];
    let level = 0;
    while(queue.length){
        let levelSize = queue.length;
        let levelArr = []
        while(levelSize > 0){
            let curr = queue.shift();
            if(level%2 == 0){
                // even level
                levelArr.push(curr.val);
            } else {
                // odd level
                levelArr.unshift(curr.val);
            }
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
            levelSize--;
        }
        level++;
        ans.push(levelArr);
    }
    return ans;
};


// Recusive
var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let ans = [];
    function traverse(curr, level){
        if(!root) return;

        if(!ans[level]) ans[level] = [];
        if(level%2 == 0){
            ans[level].push(curr.val);
        } else {
            ans[level].unshift(curr.val);
        }
        curr.left && traverse(curr.left, level+1);
        curr.right && traverse(curr.right, level+1);
    }
    traverse(root, 0);
    return ans;
};