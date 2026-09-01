/**
 * 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 */

var cloneGraph = function(root) {
    if(!root) return null;

    let stack = [root];
    let visited = new Map();
    let cloneRoot = new Node(root.val)
    visited.set(root, cloneRoot);

    while(stack.length){
        let curr = stack.pop();
        for(let node of curr.neighbors){
            if(!visited.has(node)){
                stack.push(node)
                visited.set(node, new Node(node.val));
            }
            let clonedCurr = visited.get(curr);
            clonedCurr.neighbors.push(visited.get(node));
        }
    }
    return cloneRoot;
};