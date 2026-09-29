function shortestPath(graph, src, dest) {
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    let parent = new Array(n).fill(-1);

    dist[src] = 0;
    let q = [src];
    let front = 0;
    while (front < q.length) {
        let curr = q[front++];
        for (let neighbor of graph[curr]) {
            if (dist[neighbor] == Infinity) {
                dist[neighbor] = dist[curr] + 1;
                parent[neighbor] = curr;
                q.push(neighbor);
            }
        }
    }
    console.log(parent)
    // return dist;
    // No path exists
    if (dist[dest] === Infinity) {
        return [];
    }

    // Reconstruct path
    let path = [];
    let curr = dest;
    while (curr !== -1) {
        path.push(curr);
        curr = parent[curr];
    }

    return path.reverse();
}

let graph = [
    [1, 2],
    [3],
    [4],
    [5],
    [3],
    [0]
]
console.log(shortestPath(graph, 0, 5))
