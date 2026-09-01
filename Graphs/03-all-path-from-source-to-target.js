/**
 * 797. All Paths From Source to Target
 * https://leetcode.com/problems/all-paths-from-source-to-target/description/
 */

// Simple backtrack logic
var allPathsSourceTarget = function(graph) {
    let res = [];
    let n = graph.length-1;
    function dfs(path, curr){
        if(curr === n){
            res.push([...path]);
            return;
        }
        for(let nodes of graph[curr]){
            path.push(nodes);
            dfs(path, nodes);
            path.pop();
        }
    }
    dfs([0],0)
    return res;
};