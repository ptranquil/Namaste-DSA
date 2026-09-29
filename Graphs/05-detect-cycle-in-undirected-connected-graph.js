/**
 * Detect cycle in a graph
 * https://namastedev.com/practice/detect-cycle-in-an-undirected-connected-graph-dfs
 */

function detectCycle(edges){

    let graph = {};
    for(let [x,y] of edges){
        if(!graph[x]) graph[x] = [];
        if(!graph[y]) graph[y] = [];
        graph[x].push(y);
        graph[y].push(x);
    }

    let visited = new Set();
    function dfs(curr, parent){
        visited.add(curr);
        for(let neighbor of graph[curr]){
            if(!visited.has(neighbor)){
                return dfs(neighbor, curr)
            } else {
                if(neighbor != parent){
                    return true;
                }
            }
        }
        return false;
    }
    return dfs(0, null);
}

console.log(detectCycle([[0,1], [1,2], [2,0]]))
console.log(detectCycle([[0,1], [1,2], [2,3]]))
console.log(detectCycle([[0,1], [1,2], [2,3], [3,4], [1,4]]))