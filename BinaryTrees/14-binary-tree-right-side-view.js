/**
 * 
 */

/**
 * Approach: Implement level order traversal
 * Work on right tree first and put the first element for that level
 */
var rightSideView = function(root) {
    if(!root) return [];
    let ans = []
    let queue = [root];
    while(queue.length){
        let size = queue.length;
        for(let i=0;i<size;i++){
            let curr = queue.shift();
            i === 0 && ans.push(curr.val);
            curr.right && queue.push(curr.right);
            curr.left && queue.push(curr.left);
        }
    }
    return ans;
};

// Recursive Approach
var rightSideView = function(root) {
    let ans = [];

    function traverse(curr, level){
        if(!curr) return;
        if(ans[level] === undefined) {
            // ans.push(curr.val) // or the below also works
            ans[level] = curr.val;
        }
        curr.right && traverse(curr.right, level+1);
        curr.left && traverse(curr.left, level+1);
    }
    traverse(root, 0);
    return ans;
};