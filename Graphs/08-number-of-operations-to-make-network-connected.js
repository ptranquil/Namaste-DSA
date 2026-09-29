/**
 * 1319. Number of Operations to Make Network Connected
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected/description/
 */
var makeConnected = function(n, connections) {
    if(connections.length < n-1){
        return -1;
    }

    let graph = Array.from({length: n}, () => []);
    for(let [from,to] of connections){
        graph[from].push(to);
        graph[to].push(from);
    }

    let noOfComponent = 0;
    let visited = new Array(n).fill(false);
    for(let i=0;i<n;i++){
        if(!visited[i]){
            noOfComponent++;
            dfs(i, graph, visited)
        }
    }
    return noOfComponent-1;
};

function dfs(src, graph, visited){
    let q = [src];
    visited[src] = true;
    let front = 0;
    while(front < q.length){
    // while(q.length){
        // let curr = q.shift();
        let curr = q[front++];
        for(let neighbor of graph[curr]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}