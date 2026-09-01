/**
 * 
 */

// DFS & BFS
var validPath = function (n, edges, source, destination) {
    let map = {};
    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    let stack = [source];
    let visited = new Set();
    visited.add(source);

    while (stack.length) {  
        let curr = stack.pop();
        if(curr === destination){
            return true;
        }
        let neighbors = map[curr];
        for(let node of neighbors){
            if(!visited.has(node)){
                stack.push(node)
                visited.add(node);
            }
        }
    }
    return false;
};


// DFS Recursive
var validPath = function (n, edges, source, destination) {
    let map = {};
    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    let visited = new Set();

    let dfs = function(curr){
        if(curr === destination) return true;
        visited.add(curr);
        for(let neighbors of map[curr]){
            if(!visited.has(neighbors)){
                if(dfs(neighbors)){
                    return true;
                }
            }
        }
        return false;
    }
    return dfs(source);

};